import fs from 'fs';
import path from 'path';
import https from 'https';

const imageMap = [
  {
    dir: 'public/images/hero',
    name: 'ats-hero-lingerie.jpg',
    url: 'https://images.pexels.com/photos/6311608/pexels-photo-6311608.jpeg?auto=compress&cs=tinysrgb&w=1400',
    fallbackUrl: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?q=80&w=1400&auto=format&fit=crop'
  },
  {
    dir: 'public/images/about',
    name: 'ats-craftsmanship-atelier.jpg',
    url: 'https://images.pexels.com/photos/4620615/pexels-photo-4620615.jpeg?auto=compress&cs=tinysrgb&w=1000',
    fallbackUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/bras',
    name: 'ats-bras.jpg',
    url: 'https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/panties',
    name: 'ats-panties.jpg',
    url: 'https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/lingerie-sets',
    name: 'ats-lingerie-sets.jpg',
    url: 'https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/seamless',
    name: 'ats-seamless.jpg',
    url: 'https://images.pexels.com/photos/6311603/pexels-photo-6311603.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/shapewear',
    name: 'ats-shapewear.jpg',
    url: 'https://images.pexels.com/photos/6311605/pexels-photo-6311605.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/nightwear',
    name: 'ats-nightwear.jpg',
    url: 'https://images.pexels.com/photos/6311610/pexels-photo-6311610.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/custom',
    name: 'ats-custom-lingerie.jpg',
    url: 'https://images.pexels.com/photos/4620614/pexels-photo-4620614.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/products/private-label',
    name: 'ats-private-label.jpg',
    url: 'https://images.pexels.com/photos/6311663/pexels-photo-6311663.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/manufacturing',
    name: 'ats-lingerie-stitching.jpg',
    url: 'https://images.pexels.com/photos/4620621/pexels-photo-4620621.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/quality',
    name: 'ats-quality-materials.jpg',
    url: 'https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/quality',
    name: 'ats-quality-craftsmanship.jpg',
    url: 'https://images.pexels.com/photos/4620622/pexels-photo-4620622.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/quality',
    name: 'ats-quality-control.jpg',
    url: 'https://images.pexels.com/photos/4620620/pexels-photo-4620620.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/fabric-studio',
    name: 'ats-fabric-modal.jpg',
    url: 'https://images.pexels.com/photos/6311665/pexels-photo-6311665.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/fabric-studio',
    name: 'ats-fabric-microfiber.jpg',
    url: 'https://images.pexels.com/photos/6311658/pexels-photo-6311658.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/fabric-studio',
    name: 'ats-fabric-lace.jpg',
    url: 'https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/fabric-studio',
    name: 'ats-fabric-powernet.jpg',
    url: 'https://images.pexels.com/photos/6311604/pexels-photo-6311604.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/fabric-studio',
    name: 'ats-fabric-bamboo.jpg',
    url: 'https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop'
  },
  {
    dir: 'public/images/fabric-studio',
    name: 'ats-fabric-seamless.jpg',
    url: 'https://images.pexels.com/photos/6311602/pexels-photo-6311602.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallbackUrl: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=800&auto=format&fit=crop'
  }
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
  for (const item of imageMap) {
    const targetDir = path.resolve(item.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetFile = path.join(targetDir, item.name);
    console.log(`Downloading ${item.name}...`);
    try {
      await download(item.url, targetFile);
      const stat = fs.statSync(targetFile);
      console.log(`✓ Saved ${item.name} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.warn(`! Primary failed for ${item.name}: ${err.message}. Trying fallback...`);
      try {
        await download(item.fallbackUrl, targetFile);
        const stat = fs.statSync(targetFile);
        console.log(`✓ Saved fallback ${item.name} (${(stat.size / 1024).toFixed(1)} KB)`);
      } catch (err2) {
        console.error(`✕ Failed all downloads for ${item.name}: ${err2.message}`);
      }
    }
  }
}

run();
