/**
 * ATS Fashion & Fabrics - B2B RFQ Modal Controller
 */

export function initQuoteModal() {
  const modal = document.getElementById('rfqModal');
  const modalBackdrop = document.getElementById('rfqModalBackdrop');
  const closeBtn = document.getElementById('closeRfqModal');
  const triggerButtons = document.querySelectorAll('.trigger-rfq-modal, .trigger-quote-cta');

  function openModal(options = {}) {
    if (!modal) return;

    // Optional pre-filling based on user trigger context
    if (options.category) {
      const categorySelect = modal.querySelector('select[name="productCategory"]');
      if (categorySelect) categorySelect.value = options.category;
    }

    if (options.fabric) {
      const messageField = modal.querySelector('textarea[name="message"]');
      if (messageField && !messageField.value) {
        messageField.value = `Inquiring about production using textile: ${options.fabric}`;
      }
    }

    modalBackdrop?.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus on first input
    setTimeout(() => {
      const firstInput = modal.querySelector('input[name="fullName"]');
      firstInput?.focus();
    }, 150);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modalBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach to all trigger buttons
  triggerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.getAttribute('data-category');
      const fabric = btn.getAttribute('data-fabric');
      openModal({ category, fabric });
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });

  // Expose globally for dynamic components
  window.openRfqModal = openModal;
  window.closeRfqModal = closeModal;
}
