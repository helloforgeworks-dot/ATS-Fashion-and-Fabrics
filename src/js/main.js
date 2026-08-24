/**
 * ATS Fashion & Fabrics - Main Application Bootstrap
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

  // Initialize Scroll Reveal Animations
  initScrollAnimations();

  console.log('⚡ ATS Fashion & Fabrics - High-Performance Platform Initialized');
});

function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}
