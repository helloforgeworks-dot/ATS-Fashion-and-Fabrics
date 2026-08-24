import fs from 'fs';
import path from 'path';

async function searchAndDownload(category, query, maxCount = 5) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=20&format=json`;
  
  const res = await fetch(url, { headers: { 'User-Agent': 'ATSFashionApp/1.0 (contact@atsfashionfabrics.com)' } });
  const data = await res.json();
  const results = data.query?.search || [];
  
  const outDir = path.resolve(`public/images/candidates_round2/${category}`);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let saved = 0;
  for (const item of results) {
    if (saved >= maxCount) break;
    const title = item.title;
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|mime&format=json`;
    const infoRes = await fetch(infoUrl, { headers: { 'User-Agent': 'ATSFashionApp/1.0 (contact@atsfashionfabrics.com)' } });
    const infoData = await infoRes.json();
    const page = Object.values(infoData.query?.pages || {})[0];
    const imageInfo = page?.imageinfo?.[0];
    if (imageInfo && (imageInfo.mime === 'image/jpeg' || imageInfo.mime === 'image/png')) {
      const ext = imageInfo.mime === 'image/png' ? 'png' : 'jpg';
      const cleanTitle = title.replace(/^File:/i, '').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 35);
      const dest = path.join(outDir, `${saved + 1}_${cleanTitle}.${ext}`);
      
      try {
        const imgRes = await fetch(imageInfo.url, { headers: { 'User-Agent': 'ATSFashionApp/1.0 (contact@atsfashionfabrics.com)' } });
        if (imgRes.ok) {
          const buffer = await imgRes.arrayBuffer();
          fs.writeFileSync(dest, Buffer.from(buffer));
          console.log(`✓ [${category}] Saved: ${dest} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
          saved++;
        }
      } catch (e) {
        console.error(`✕ Error downloading ${title}: ${e.message}`);
      }
    }
  }
}

async function main() {
  await searchAndDownload('panties_flatlay', 'panties product OR lace briefs OR underpants');
  await searchAndDownload('lingerie_sets', 'bikini top bottom OR bra panty set OR swimwear set OR underwear set');
  await searchAndDownload('custom_pattern', 'pattern drafting dressmaking OR sewing pattern cutting OR tailoring');
  await searchAndDownload('private_label_tags', 'clothing tag OR garment label OR fashion branding label');
}

main();
