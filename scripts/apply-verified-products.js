import fs from 'fs';
import path from 'path';

const productMappings = [
  {
    category: 'bras',
    source: 'public/images/verified_lingerie/bra_lace_real.jpg',
    targets: [
      'public/images/products/bras/ats-bras.jpg',
      'public/images/products/bras/bra-hero.jpg'
    ]
  },
  {
    category: 'panties',
    source: 'public/images/target_search/panties_exact/1_Knickers1_jpg.jpg',
    targets: [
      'public/images/products/panties/ats-panties.jpg',
      'public/images/products/panties/panties-hero.jpg'
    ]
  },
  {
    category: 'lingerie-sets',
    source: 'public/images/candidates/bras/1_Lace_bodysuit_with_bra_underne.jpg',
    targets: [
      'public/images/products/lingerie-sets/ats-lingerie-sets.jpg',
      'public/images/products/lingerie-sets/sets-hero.jpg'
    ]
  },
  {
    category: 'seamless',
    source: 'public/images/candidates/seamless/1_Seamless_bra__coffee-brown_jpg.jpg',
    targets: [
      'public/images/products/seamless/ats-seamless.jpg',
      'public/images/products/seamless/seamless-hero.jpg'
    ]
  },
  {
    category: 'shapewear',
    source: 'public/images/verified_lingerie/shapewear_bodysuit_real.jpg',
    targets: [
      'public/images/products/shapewear/ats-shapewear.jpg',
      'public/images/products/shapewear/shapewear-hero.jpg'
    ]
  },
  {
    category: 'nightwear',
    source: 'public/images/candidates/nightwear/3_Negligee_made_of_transparent_w.jpg',
    targets: [
      'public/images/products/nightwear/ats-nightwear.jpg',
      'public/images/products/nightwear/nightwear-hero.jpg'
    ]
  },
  {
    category: 'custom',
    source: 'public/images/target_search/corset_patterns/1_MoMu_Study_Collection_corset__.jpg',
    targets: [
      'public/images/products/custom/ats-custom-lingerie.jpg',
      'public/images/products/custom/custom-hero.jpg'
    ]
  },
  {
    category: 'private-label',
    source: 'public/images/tmp_test/pl_2.jpg',
    targets: [
      'public/images/products/private-label/ats-private-label.jpg',
      'public/images/products/private-label/pl-hero.jpg'
    ]
  }
];

function main() {
  for (const item of productMappings) {
    const src = path.resolve(item.source);
    if (!fs.existsSync(src)) {
      console.error(`Source missing: ${src}`);
      continue;
    }
    const buf = fs.readFileSync(src);
    for (const target of item.targets) {
      const dest = path.resolve(target);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, buf);
      console.log(`✓ Installed [${item.category}] -> ${target} (${(buf.byteLength / 1024).toFixed(1)} KB)`);
    }
  }
}

main();
