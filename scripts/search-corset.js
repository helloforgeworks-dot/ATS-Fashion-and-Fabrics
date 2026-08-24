import fs from 'fs';
import path from 'path';

async function searchSpecific(query, folder) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=10&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'ATSFashionApp/1.0' } });
  const data = await res.json();
  const results = data.query?.search || [];
  
  const outDir = path.resolve(`public/images/target_search/${folder}`);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let saved = 0;
  for (const item of results) {
    if (saved >= 5) break;
    const title = item.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|mime&format=json`;
    const infoRes = await fetch(infoUrl, { headers: { 'User-Agent': 'ATSFashionApp/1.0' } });
    const infoData = await infoRes.json();
    const page = Object.values(infoData.query?.pages || {})[0];
    const imageInfo = page?.imageinfo?.[0];
    if (imageInfo && (imageInfo.mime === 'image/jpeg' || imageInfo.mime === 'image/png')) {
      const ext = imageInfo.mime === 'image/png' ? 'png' : 'jpg';
      const cleanTitle = title.replace(/^File:/i, '').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const dest = path.join(outDir, `${saved + 1}_${cleanTitle}.${ext}`);
      
      try {
        const imgRes = await fetch(imageInfo.url, { headers: { 'User-Agent': 'ATSFashionApp/1.0' } });
        if (imgRes.ok) {
          const buffer = await imgRes.arrayBuffer();
          fs.writeFileSync(dest, Buffer.from(buffer));
          console.log(`✓ [${folder}] ${dest} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
          saved++;
        }
      } catch (e) {}
    }
  }
}

async function main() {
  await searchSpecific('corset pattern', 'corset_patterns');
  await searchSpecific('sewing lace', 'sewing_lace');
  await searchSpecific('garment label box OR packaging label', 'garment_packaging');
}

main();
