/**
 * ATS Fashion & Fabrics - Main Application Bootstrap (High-Performance)
 */
import { initNavigation } from './navigation.js';
import { initProductGallery } from './productGallery.js';
import { initFabricStudio } from './fabricStudio.js';
import { initQuoteModal } from './quoteModal.js';
import { initFormHandler } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation & sticky states
  initNavigation();

  // Initialize interactive product spec drawer & catalog
  initProductGallery();

  // Initialize interactive textile / fabric studio
  initFabricStudio();

  // Initialize B2B RFQ modal system
  initQuoteModal();

  // Initialize form validation & file dropzone
  initFormHandler();

  // Initialize Global Robust Image Fallback System
  initImageFallbackSystem();

  // Initialize Scroll Reveal Animations (High performance pre-triggering)
  initScrollAnimations();

  console.log('⚡ ATS Fashion & Fabrics - High-Performance Platform Initialized');
});

function initImageFallbackSystem() {
  const fallbackMap = {
    'ats-hero-lingerie': '/assets/images/hero-campaign.svg',
    'ats-craftsmanship-atelier': '/assets/images/about-craft.svg',
    'ats-bras': '/assets/images/category-bras.svg',
    'ats-panties': '/assets/images/category-panties.svg',
    'ats-lingerie-sets': '/assets/images/category-sets.svg',
    'ats-seamless': '/assets/images/category-seamless.svg',
    'ats-shapewear': '/assets/images/category-shapewear.svg',
    'ats-nightwear': '/assets/images/category-nightwear.svg',
    'ats-custom-lingerie': '/assets/images/category-custom.svg',
    'ats-private-label': '/assets/images/category-privatelabel.svg',
    'ats-quality-materials': '/assets/images/quality-materials.svg',
    'ats-quality-craftsmanship': '/assets/images/quality-craft.svg',
    'ats-quality-control': '/assets/images/quality-qc.svg',
    'ats-fabric-modal': '/assets/images/fabric-modal.svg',
    'ats-fabric-microfiber': '/assets/images/fabric-microfiber.svg',
    'ats-fabric-lace': '/assets/images/fabric-lace.svg',
    'ats-fabric-powernet': '/assets/images/fabric-powernet.svg',
    'ats-fabric-bamboo': '/assets/images/fabric-bamboo.svg',
    'ats-fabric-seamless': '/assets/images/fabric-seamless.svg'
  };

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      const src = img.src || '';
      for (const [key, fallback] of Object.entries(fallbackMap)) {
        if (src.includes(key) && !src.endsWith('.svg')) {
          console.warn(`[ATS Image System] Image ${key} failed to load. Applying fallback: ${fallback}`);
          img.src = fallback;
          break;
        }
      }
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  // Pre-trigger elements 120px before entering viewport for seamless zero-lag rendering
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '120px 0px 0px 0px',
    threshold: 0.01
  });

  elements.forEach(el => observer.observe(el));
}
