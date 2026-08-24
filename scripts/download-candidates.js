import fs from 'fs';
import path from 'path';

async function searchAndDownload(category, query, maxCount = 4) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=${maxCount * 3}&format=json`;
  
  const res = await fetch(url, { headers: { 'User-Agent': 'ATSFashionApp/1.0 (contact@atsfashionfabrics.com)' } });
  const data = await res.json();
  const results = data.query?.search || [];
  
  const outDir = path.resolve(`public/images/candidates/${category}`);
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
      const cleanTitle = title.replace(/^File:/i, '').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
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
  await searchAndDownload('bras', 'lace bra OR brassiere');
  await searchAndDownload('panties', 'sheer panties OR lace panties OR underwear brief');
  await searchAndDownload('sets', 'lingerie set OR corset lace');
  await searchAndDownload('seamless', 'seamless bra OR sports bra microfiber');
  await searchAndDownload('shapewear', 'bodysuit lingerie OR shapewear OR corset');
  await searchAndDownload('nightwear', 'nightgown OR negligee OR chemise slip');
  await searchAndDownload('custom', 'dressmaker measuring OR pattern drafting OR garment sewing');
  await searchAndDownload('privatelabel', 'clothing label OR gift box luxury OR fashion packaging');
}

main();
