import fs from 'fs';
import path from 'path';

async function downloadUnsplashDirect(keyword, filename) {
  // Use source.unsplash or specific curated unsplash IDs with high quality fashion
  const curatedIds = {
    'bras': 'photo-1596704017254-9b121068fb31', // luxury bra
    'panties': 'photo-1582533561751-ef6f6ab93a2e', // intimate lingerie
    'lingerie_set': 'photo-1516762689617-e1cffcef479d', // fashion garment
    'seamless': 'photo-1515886657613-9f3515b0c78f', // minimal fashion
    'shapewear': 'photo-1509631179647-0177331693ae', // silhouette fashion
    'nightwear': 'photo-1539109136881-3be0616acf4b', // silk satin
    'custom_lingerie': 'photo-1558769132-cb1aea458c5e', // atelier fashion design / tailoring
    'private_label': 'photo-1544441893-675973e31985', // garment rack / brand packaging
  };
}

async function searchCommonsDeep(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size|mime&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'ATSFashionApp/1.0 (contact@atsfashionfabrics.com)' } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  console.log(`Query "${query}" found ${pages.length} results:`);
  pages.forEach(p => console.log(` - ${p.title}: ${p.imageinfo?.[0]?.url}`));
}

async function test() {
  await searchCommonsDeep('lingerie mannequin');
  await searchCommonsDeep('brassiere flat');
  await searchCommonsDeep('corset pattern drafting');
  await searchCommonsDeep('lingerie exhibition');
}

test();
