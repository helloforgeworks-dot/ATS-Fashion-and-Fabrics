import fs from 'fs';
import path from 'path';

const curated = [
  {
    category: 'bras',
    name: 'bra_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'panties',
    name: 'panties_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'lingerie-sets',
    name: 'set_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'seamless',
    name: 'seamless_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'shapewear',
    name: 'shapewear_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'nightwear',
    name: 'nightwear_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'custom',
    name: 'custom_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=85'
  },
  {
    category: 'private-label',
    name: 'privatelabel_curated_1.jpg',
    url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=85'
  }
];

async function main() {
  const dir = path.resolve('public/images/test_curated');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const item of curated) {
    try {
      const dest = path.join(dir, item.name);
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`✓ Downloaded ${item.name} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
      } else {
        console.log(`✕ Failed ${item.name} with HTTP ${res.status}`);
      }
    } catch (e) {
      console.log(`✕ Error ${item.name}: ${e.message}`);
    }
  }
}

main();
