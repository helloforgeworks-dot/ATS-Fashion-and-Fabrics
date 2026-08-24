/**
 * ATS Fashion & Fabrics - Form Handler & B2B Inquiry Processing
 */

export function initFormHandler() {
  const forms = document.querySelectorAll('.b2b-rfq-form');

  forms.forEach(form => {
    setupFileDropzone(form);
    setupFormSubmission(form);
  });
}

function setupFileDropzone(form) {
  const dropzone = form.querySelector('.file-dropzone');
  const fileInput = form.querySelector('input[type="file"]');
  const preview = form.querySelector('.file-preview');
  const fileNameEl = form.querySelector('.file-name');
  const removeFileBtn = form.querySelector('.remove-file-btn');

  if (!dropzone || !fileInput) return;

  dropzone.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (file) {
      displayFile(file);
    }
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const file = dt.files?.[0];
    if (file) {
      fileInput.files = dt.files;
      displayFile(file);
    }
  });

  function displayFile(file) {
    if (fileNameEl) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      fileNameEl.textContent = `${file.name} (${sizeMb} MB)`;
    }
    if (preview) {
      preview.classList.add('active');
    }
    dropzone.style.display = 'none';
  }

  removeFileBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.value = '';
    if (preview) preview.classList.remove('active');
    dropzone.style.display = 'block';
  });
}

function setupFormSubmission(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation check
    const formData = new FormData(form);
    const fullName = formData.get('fullName')?.toString().trim();
    const companyName = formData.get('companyName')?.toString().trim();
    const email = formData.get('businessEmail')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const category = formData.get('productCategory')?.toString().trim();

    if (!fullName || !companyName || !email || !phone || !category) {
      alert('Please fill in all required fields (Name, Company, Email, Phone, and Category).');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please provide a valid business email address.');
      return;
    }

    // Generate B2B RFQ Tracking Reference Number
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const rfqRef = `ATS-RFQ-${new Date().getFullYear()}-${randomSuffix}`;

    // Get success state container
    const successState = form.parentElement.querySelector('.form-success-state');
    const formContainer = form;

    if (successState) {
      const refEl = successState.querySelector('.rfq-reference-id');
      const nameEl = successState.querySelector('.summary-client-name');
      const companyEl = successState.querySelector('.summary-company-name');
      const categoryEl = successState.querySelector('.summary-category');
      const quantityEl = successState.querySelector('.summary-quantity');
      const whatsappBtn = successState.querySelector('.whatsapp-forward-btn');

      if (refEl) refEl.textContent = rfqRef;
      if (nameEl) nameEl.textContent = fullName;
      if (companyEl) companyEl.textContent = companyName;
      if (categoryEl) categoryEl.textContent = category.toUpperCase();
      if (quantityEl) quantityEl.textContent = formData.get('quantity')?.toString() || 'To be determined';

      if (whatsappBtn) {
        const messageText = encodeURIComponent(
          `Hello ATS Fashion & Fabrics Team,\n\nI have submitted a manufacturing inquiry [${rfqRef}].\n` +
          `Company: ${companyName}\n` +
          `Name: ${fullName}\n` +
          `Category: ${category}\n` +
          `Quantity: ${formData.get('quantity') || 'Custom'}\n\n` +
          `Looking forward to receiving the quote.`
        );
        whatsappBtn.href = `https://wa.me/919999999999?text=${messageText}`;
      }

      formContainer.style.display = 'none';
      successState.classList.add('active');
    }
  });
}
