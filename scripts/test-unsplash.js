import fs from 'fs';
import path from 'path';
import https from 'https';

const testUrls = [
  { id: 'bra_1', url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=900&auto=format&fit=crop' },
  { id: 'bra_2', url: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?q=80&w=900&auto=format&fit=crop' },
  { id: 'panties_1', url: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=900&auto=format&fit=crop' },
  { id: 'panties_2', url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop' },
  { id: 'set_1', url: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=900&auto=format&fit=crop' },
  { id: 'seamless_1', url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=900&auto=format&fit=crop' },
  { id: 'shapewear_1', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop' },
  { id: 'nightwear_1', url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop' },
  { id: 'nightwear_2', url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop' },
  { id: 'custom_1', url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop' },
  { id: 'pl_1', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop' },
  { id: 'pl_2', url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(true));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const tmpDir = path.resolve('public/images/tmp_test');
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

  for (const item of testUrls) {
    const dest = path.join(tmpDir, `${item.id}.jpg`);
    try {
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ ${item.id} -> ${(stat.size / 1024).toFixed(1)} KB`);
    } catch (err) {
      console.error(`✕ ${item.id} -> ${err.message}`);
    }
  }
}

run();
