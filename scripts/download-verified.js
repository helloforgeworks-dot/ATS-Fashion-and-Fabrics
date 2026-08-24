import fs from 'fs';
import path from 'path';

const filesToDownload = [
  { id: 'bra_lace_real', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/A_Lace_Bra.jpg' },
  { id: 'panties_sheer_real', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Semi_Sheer_Panties_Black.jpg' },
  { id: 'panties_white_real', url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Semi_Sheer_Panties_White.jpg' },
  { id: 'set_real_1', url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Lingerie_set_%28AM_470-9%29.jpg' },
  { id: 'set_real_2', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Lingerie_set_%28AM_470-4%29.jpg' },
  { id: 'shapewear_bodysuit_real', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Shapewear_bodysuit_-_pose_2_-_Modelled_by_Lady_Alexi.jpg' },
  { id: 'custom_lingerie_pattern', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Made_for_Mermaids_%28Bridgette_%26_Cheekie_Panty%29%3B_Lingerie_Methods_%2826249089038%29.jpg' }
];

async function run() {
  const dir = path.resolve('public/images/verified_lingerie');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const item of filesToDownload) {
    const dest = path.join(dir, `${item.id}.jpg`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'ATSFashionApp/1.0 (contact@atsfashion.com)' } });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buf));
        console.log(`✓ Saved ${item.id} (${(buf.byteLength / 1024).toFixed(1)} KB)`);
      } else {
        console.error(`✕ ${item.id} -> HTTP ${res.status}`);
      }
    } catch (e) {
      console.error(`✕ ${item.id} -> ${e.message}`);
    }
  }
}

run();
