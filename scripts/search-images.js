// Native fetch is global in Node 18+

async function searchWiki(term) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'ATSFashion/1.0 (test@example.com)' } });
    const json = await res.json();
    const pages = json.query ? Object.values(json.query.pages) : [];
    console.log(`=== Results for: "${term}" ===`);
    pages.forEach(p => {
      if (p.imageinfo && p.imageinfo[0]) {
        console.log(p.title, '-->', p.imageinfo[0].url);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  await searchWiki('bra lingerie lace');
  await searchWiki('panties lingerie');
  await searchWiki('corset lingerie set');
}

main();
