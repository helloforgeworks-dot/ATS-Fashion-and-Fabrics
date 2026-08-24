/**
 * ATS Fashion & Fabrics - Product Category Data & Spec Drawer Controller
 */

export const productCategories = [
  {
    id: 'bras',
    number: '01',
    title: 'Bras',
    subtitle: 'Precision Engineered Support & Silhouettes',
    description: 'T-shirt bras, wire-free bralettes, plunge, push-up, balconette, sports & nursing bras manufactured with ergonomic cup molding and premium hardware.',
    image: '/assets/images/category-bras.svg',
    capabilities: [
      'Custom Memory Foam & Spacer Cup Molding',
      'Underwire & Wire-Free Ergonomic Architecture',
      'Flatlock Stitching & Ultrasonic Bonded Wings',
      'OEKO-TEX Class 1 Certified Microfibers & Laces'
    ],
    fabricOptions: 'Modal blends, fine polyamide microfiber, organic bamboo cotton, power mesh, European stretch lace.',
    customizations: 'Custom dyed elastics, gold/rose-gold alloy sliders & rings, hook-and-eye closures, branded heat seals.',
    productionType: 'OEM / ODM / Private Label',
    idealFor: 'D2C lingerie brands, fashion labels, multi-brand retailers'
  },
  {
    id: 'panties',
    number: '02',
    title: 'Panties',
    subtitle: 'Intimate Comfort & Second-Skin Finishing',
    description: 'Bikini, hipster, thong, boyshort, high-waist & laser-cut seamless briefs engineered for zero panty-lines, breathability and stretch recovery.',
    image: '/assets/images/category-panties.svg',
    capabilities: [
      'Laser-Cut Raw Edges & Stitchless Heat Bonding',
      '100% Anti-Microbial Organic Cotton Gussets',
      'Ultra-Soft Plush Elastics & Scalloped Lace Trims',
      'Colorfastness Grade 4+ Wash Resilience'
    ],
    fabricOptions: 'Supima cotton, Micro-Modal, Spandex stretch mesh, regenerated nylon.',
    customizations: 'Custom woven waistbands, silicone grip backing, edge binding, custom packaging boxes.',
    productionType: 'OEM / Private Label / Volume Manufacturing',
    idealFor: 'Everyday essentials, bridal collections, eco-conscious innerwear lines'
  },
  {
    id: 'lingerie-sets',
    number: '03',
    title: 'Lingerie Sets',
    subtitle: 'Coordinated Haute Couture & Everyday Luxury',
    description: 'Matching bralette and brief combinations, luxury lace corsetry, satin garters and multi-piece coordinated collections crafted with pattern symmetry.',
    image: '/assets/images/category-sets.svg',
    capabilities: [
      'Precision Motif Placement & Symmetry Matching',
      'Intricate Eyelash Lace & Embroidery Inlay',
      'Multi-Strap Architectural Caging & Adjustable Hardware',
      'Bespoke Silk Satin & Sheer Mesh Paneling'
    ],
    fabricOptions: 'Silk satin, French stretch chantilly lace, sheer power netting, microvelvet.',
    customizations: 'Custom ribbon trims, metallic branding plaques, satin storage pouches.',
    productionType: 'Custom Capsule & Brand Production',
    idealFor: 'Boutique lingerie brands, bridal collections, luxury fashion houses'
  },
  {
    id: 'seamless-wear',
    number: '04',
    title: 'Seamless Wear',
    subtitle: 'Advanced 3D Knit & Stitchless Innovation',
    description: 'Zero-seam circular knit tops, bralettes, shorts and slips that contour flawlessly without pressure points or visible lines.',
    image: '/assets/images/category-seamless.svg',
    capabilities: [
      'San-Toni Circular 3D Knitting Technology',
      'Targeted Compression & Ventilation Zoning',
      'Zero-Chafe Ultrasonic Bonded Finishes',
      'High-Recovery Microfiber & Spandex Matrix'
    ],
    fabricOptions: 'Polyamide-elastane yarns, anti-static microfibers, moisture-wicking blends.',
    customizations: 'Engineered jacquard patterns, integrated ribbing, transfer logos.',
    productionType: 'High-Speed Automated Manufacturing',
    idealFor: 'Athleisure, lounge-to-street lines, modern comfort underwear'
  },
  {
    id: 'shapewear',
    number: '05',
    title: 'Shapewear',
    subtitle: 'Targeted Sculpting & Breathable Control',
    description: 'Light, medium and firm compression bodysuits, high-waist tummy control briefs, thigh slimmers and waist cinchers with anti-roll silicone engineering.',
    image: '/assets/images/category-shapewear.svg',
    capabilities: [
      'Zoned Compression Mapping for Optimal Contour',
      'Medical-Grade Anti-Slip Silicone Edge Grippers',
      'Seamless Bonded Waistbands & Open-Gusset Finishes',
      'Breathable Powernet & Micro-Mesh Construction'
    ],
    fabricOptions: 'High-density Powernet, elastane-rich microfibers, cooling touch textiles.',
    customizations: 'Custom hook-and-eye step adjustments, bonded tummy panels, branded waist grips.',
    productionType: 'OEM / Private Label Technical Manufacturing',
    idealFor: 'Specialty shapewear labels, bridal foundation lines, post-partum collections'
  },
  {
    id: 'nightwear',
    number: '06',
    title: 'Nightwear',
    subtitle: 'Sensorial Loungewear & Fluid Silhouettes',
    description: 'Bias-cut satin slips, camisole & tap short sets, modal lounge robes, pajamas and sleep shirts tailored with french seams and drape.',
    image: '/assets/images/category-nightwear.svg',
    capabilities: [
      'French Seam Tailoring & Bias-Cut Drape Engineering',
      'Fine Hemming & Eyelash Lace Insets',
      'Wrinkle-Resistant & Anti-Pilling Textile Finishing',
      'Fluid Silk Touch & Breathable Nightwear Weaves'
    ],
    fabricOptions: 'Poly-satin silk touch, Modal jersey, organic bamboo, Tencel, viscose.',
    customizations: 'Custom mother-of-pearl buttons, contrast piping, monogram embroidery, gift ribbon packaging.',
    productionType: 'OEM / Private Label Collection Runs',
    idealFor: 'Sleepwear brands, resort collections, luxury gifting catalogs'
  },
  {
    id: 'custom-lingerie',
    number: '07',
    title: 'Custom Lingerie',
    subtitle: 'Bespoke Development from Tech Packs & Sketches',
    description: 'Full-spectrum custom product development for avant-garde designs, unique size-grading, bespoke trims, specialty embroideries and proprietary cup molds.',
    image: '/assets/images/category-custom.svg',
    capabilities: [
      'Tech-Pack Interpretation & Rapid 3D Pattern Grading',
      'Proprietary Tooling & Custom Cup Mold Creation',
      'Exclusive Custom-Dyed Pantone Color Matching',
      'Bespoke Embroidery & Specialty Hardware Sourcing'
    ],
    fabricOptions: 'Custom developed blends, sustainable fibers, designer jacquards.',
    customizations: 'Full custom hardware, branded elastics, custom woven badges, exclusive silhouettes.',
    productionType: 'Bespoke Prototype to Full Scale Production',
    idealFor: 'High-fashion runway brands, designer launches, signature capsule collections'
  },
  {
    id: 'private-label',
    number: '08',
    title: 'Private Label & OEM',
    subtitle: 'Turn-Key Brand Manufacturing from Ghaziabad Hub',
    description: 'Complete end-to-end production solutions with custom woven labels, heat-transfer branding, barcode hangtags, polybags, eco boxes and export packaging.',
    image: '/assets/images/category-privatelabel.svg',
    capabilities: [
      'Woven, Satin & Tagless Heat-Transfer Care Labels',
      'Custom Embossed Hangtags & Barcode Labeling',
      'FSC-Certified Luxury Packaging Boxes & Zip Pouches',
      'Rigorous Batch Quality Assurance (AQL 2.5 Standards)'
    ],
    fabricOptions: 'Access to ATS vetted global & domestic intimate apparel textile mills.',
    customizations: 'Comprehensive branding packages ready for direct retail or e-commerce fulfillment.',
    productionType: 'Full-Service Turnkey Manufacturing',
    idealFor: 'E-commerce retailers, global distributors, emerging direct-to-consumer brands'
  }
];

export function initProductGallery() {
  const drawer = document.getElementById('specDrawer');
  const drawerBackdrop = document.getElementById('specDrawerBackdrop');
  const drawerCloseBtn = document.getElementById('closeSpecDrawer');
  const categoryCards = document.querySelectorAll('.category-card');

  function openDrawer(categoryId) {
    const data = productCategories.find(item => item.id === categoryId);
    if (!data || !drawer) return;

    // Populate drawer elements
    const numberEl = drawer.querySelector('.drawer-number');
    const titleEl = drawer.querySelector('.drawer-title');
    const subtitleEl = drawer.querySelector('.drawer-subtitle');
    const descEl = drawer.querySelector('.drawer-desc');
    const imageEl = drawer.querySelector('.drawer-image');
    const capabilitiesEl = drawer.querySelector('.drawer-capabilities');
    const fabricEl = drawer.querySelector('.drawer-fabrics');
    const customEl = drawer.querySelector('.drawer-customizations');
    const idealEl = drawer.querySelector('.drawer-ideal');
    const sampleBtn = drawer.querySelector('.drawer-sample-btn');

    if (numberEl) numberEl.textContent = `CATEGORY ${data.number}`;
    if (titleEl) titleEl.textContent = data.title;
    if (subtitleEl) subtitleEl.textContent = data.subtitle;
    if (descEl) descEl.textContent = data.description;
    if (imageEl) {
      imageEl.src = data.image;
      imageEl.alt = `${data.title} Manufacturing - ATS Fashion & Fabrics`;
    }

    if (capabilitiesEl) {
      capabilitiesEl.innerHTML = data.capabilities.map(cap => `
        <li style="display:flex; align-items:flex-start; gap:0.5rem; margin-bottom:0.4rem; font-size:0.86rem; color:var(--color-text-body);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--color-accent-wine); flex-shrink:0; margin-top:2px;">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${cap}</span>
        </li>
      `).join('');
    }

    if (fabricEl) fabricEl.textContent = data.fabricOptions;
    if (customEl) customEl.textContent = data.customizations;
    if (idealEl) idealEl.textContent = data.idealFor;

    if (sampleBtn) {
      sampleBtn.setAttribute('data-category', data.id);
    }

    drawer.classList.add('active');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('active');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryId = card.getAttribute('data-category');
      if (categoryId) openDrawer(categoryId);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const categoryId = card.getAttribute('data-category');
        if (categoryId) openDrawer(categoryId);
      }
    });
  });

  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeDrawer();
    }
  });
}
