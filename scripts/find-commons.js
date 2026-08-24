import fs from 'fs';
import https from 'https';

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=15&format=json`;
  
  const res = await fetch(url, { headers: { 'User-Agent': 'ATSFashion/1.0 (contact@atsfashion.com)' } });
  const data = await res.json();
  const results = data.query?.search || [];
  
  console.log(`\n================ ${query} ================`);
  for (const item of results) {
    // Get direct file URL
    const title = item.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|mime&format=json`;
    const infoRes = await fetch(infoUrl, { headers: { 'User-Agent': 'ATSFashion/1.0 (contact@atsfashion.com)' } });
    const infoData = await infoRes.json();
    const page = Object.values(infoData.query?.pages || {})[0];
    const imageInfo = page?.imageinfo?.[0];
    if (imageInfo && (imageInfo.mime === 'image/jpeg' || imageInfo.mime === 'image/png')) {
      console.log(`- Title: ${title}`);
      console.log(`  URL: ${imageInfo.url}`);
    }
  }
}

async function main() {
  await searchCommons('brassiere lace');
  await searchCommons('panties underwear');
  await searchCommons('lingerie set');
  await searchCommons('shapewear bodysuit');
  await searchCommons('nightgown satin slip');
  await searchCommons('lingerie pattern sewing');
  await searchCommons('luxury packaging box tag');
}

main();
