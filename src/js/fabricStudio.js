/**
 * ATS Fashion & Fabrics - Interactive Fabric Studio
 */

export const fabricData = [
  {
    id: 'modal',
    name: 'Micro-Modal & Elastane',
    badge: 'EVERYDAY LUXURY & BREATHABILITY',
    composition: '92% Micro-Modal, 8% Spandex',
    weight: '160 - 180 GSM',
    stretchRatio: '4-Way Stretch (120% horizontal, 80% vertical)',
    breathability: 'Ultra-High (Grade A)',
    idealFor: 'Everyday panties, soft-cup bralettes, camisole nightwear',
    highlights: 'Derived from natural beechwood pulp. Exceptional silky softness, anti-pilling wash resistance, and thermal regulation.',
    image: '/assets/images/fabric-modal.svg'
  },
  {
    id: 'microfiber',
    name: 'Bonded Polyamide Microfiber',
    badge: 'SEAMLESS & LASER-CUT READY',
    composition: '82% Polyamide Micro-Denier, 18% Elastane',
    weight: '130 - 150 GSM',
    stretchRatio: 'High-Recovery 4-Way Stretch',
    breathability: 'High (Rapid Dry Technology)',
    idealFor: 'Laser-cut seamless briefs, T-shirt bra wings, bonded active innerwear',
    highlights: 'Zero-fray raw edge compatibility, ultrasonic bonding stability, ultra-smooth touch with invisible panty line performance.',
    image: '/assets/images/fabric-microfiber.svg'
  },
  {
    id: 'lace',
    name: 'French Stretch Floral Lace',
    badge: 'HAUTE COUTURE INTIMATES',
    composition: '88% Polyamide, 12% Spandex / Elastane',
    weight: '110 - 140 GSM',
    stretchRatio: '2-Way Elastic Stretch with Soft Scalloped Edge',
    breathability: 'Maximal Ventilation / Sheer',
    idealFor: 'Lingerie sets, bridal corsetry, bra cup inlays, decorative waistband trims',
    highlights: 'Intricate jacquard raschel knitting, plush skin contact side, colorfast dye formulation for high-contrast palettes.',
    image: '/assets/images/fabric-lace.svg'
  },
  {
    id: 'powernet',
    name: 'High-Density Powernet',
    badge: 'TARGETED ARCHITECTURAL CONTROL',
    composition: '75% Polyamide, 25% High-Modulus Elastane',
    weight: '210 - 260 GSM',
    stretchRatio: 'Directional High-Tension Compression',
    breathability: 'Engineered Micro-Mesh Ventilation',
    idealFor: 'Shapewear bodysuits, bra cradle reinforcement, tummy-control waistbands',
    highlights: 'Firm contouring without trapping heat. Retains compression modulus across 100+ standard laundry cycles.',
    image: '/assets/images/fabric-powernet.svg'
  },
  {
    id: 'bamboo',
    name: 'Organic Bamboo Cotton',
    badge: 'HYPOALLERGENIC ESSENTIALS',
    composition: '95% Certified Organic Bamboo Cotton, 5% Spandex',
    weight: '170 - 190 GSM',
    stretchRatio: 'Balanced 4-Way Stretch',
    breathability: 'High Natural Permeability',
    idealFor: 'Anti-microbial panty gussets, maternity innerwear, sensitive-skin basics',
    highlights: 'Naturally antibacterial and hypoallergenic. OEKO-TEX standard compliant eco-friendly dye processing.',
    image: '/assets/images/fabric-bamboo.svg'
  },
  {
    id: 'seamless-knit',
    name: '3D Seamless Engineered Knit',
    badge: 'CIRCULAR KNIT INNOVATION',
    composition: '90% Nylon 6.6 Microfiber, 10% Creora Spandex',
    weight: 'Variable Zoned Density (140 - 240 GSM)',
    stretchRatio: 'Omnidirectional 360-Degree Contour',
    breathability: 'Zoned Jacquard Ventilation Mesh',
    idealFor: 'Athleisure bralettes, lounge shorts, seamless slips, comfort underwear',
    highlights: 'Manufactured on high-precision circular knitting machines with zero side-seams and engineered support ribs.',
    image: '/assets/images/fabric-seamless.svg'
  }
];

export function initFabricStudio() {
  const tabButtons = document.querySelectorAll('.fabric-tab-btn');
  const fabricCard = document.getElementById('fabricStudioContainer');
  if (!fabricCard) return;

  function renderFabricPane(fabric) {
    return `
      <div class="fabric-tab-pane active" id="fabric-pane-${fabric.id}">
        <div class="fabric-info-col">
          <div class="badge badge-wine" style="margin-bottom:1rem;">${fabric.badge}</div>
          <h3 style="font-family:var(--font-serif); font-size:clamp(1.6rem, 2.5vw, 2.2rem); text-transform:uppercase; margin-bottom:1rem;">
            ${fabric.name}
          </h3>
          <p style="font-size:0.92rem; color:var(--color-text-body); line-height:1.65; margin-bottom:1.5rem;">
            ${fabric.highlights}
          </p>

          <table class="spec-table" style="margin-bottom:1.75rem;">
            <tbody>
              <tr>
                <th>Composition</th>
                <td>${fabric.composition}</td>
              </tr>
              <tr>
                <th>Fabric Weight</th>
                <td>${fabric.weight}</td>
              </tr>
              <tr>
                <th>Elasticity & Stretch</th>
                <td>${fabric.stretchRatio}</td>
              </tr>
              <tr>
                <th>Breathability Rating</th>
                <td>${fabric.breathability}</td>
              </tr>
              <tr>
                <th>Recommended For</th>
                <td>${fabric.idealFor}</td>
              </tr>
            </tbody>
          </table>

          <button type="button" class="btn btn-wine btn-sm trigger-rfq-modal" data-category="custom-lingerie" data-fabric="${fabric.name}">
            INQUIRE ABOUT THIS TEXTILE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div class="fabric-visual-col">
          <div style="aspect-ratio:4/3.5; border-radius:var(--radius-xs); overflow:hidden; border:1px solid var(--border-light); box-shadow:var(--shadow-card);">
            <img src="${fabric.image}" alt="${fabric.name} Fabric - ATS Fashion & Fabrics" style="width:100%; height:100%; object-fit:cover;">
          </div>
        </div>
      </div>
    `;
  }

  // Initial load
  const initialFabric = fabricData[0];
  const paneContainer = document.getElementById('fabricPaneContainer');
  if (paneContainer) {
    paneContainer.innerHTML = renderFabricPane(initialFabric);
  }

  // Switch tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const fabricId = btn.getAttribute('data-fabric-id');
      const selectedFabric = fabricData.find(f => f.id === fabricId) || fabricData[0];

      if (paneContainer) {
        paneContainer.innerHTML = renderFabricPane(selectedFabric);
        // Rebind quote trigger on newly inserted button
        const newBtn = paneContainer.querySelector('.trigger-rfq-modal');
        if (newBtn && window.openRfqModal) {
          newBtn.addEventListener('click', () => {
            window.openRfqModal({ fabric: selectedFabric.name });
          });
        }
      }
    });
  });
}
