document.addEventListener('DOMContentLoaded', () => {
  const certItems = document.querySelectorAll('.certificate-item');
  const modal = document.getElementById('cert-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const certImage = document.getElementById('cert-image');
  const certDescription = document.getElementById('cert-cred');

  certItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const credText = item.getAttribute('data-cred');

      if (imgSrc && credText) {
        certImage.src = imgSrc;
        certDescription.textContent = credText;
        modal.style.display = 'flex';
      } else {
        console.error('Certificate image or credential missing for item:', item);
      }
    });
  });

  modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    certImage.src = '';
    certDescription.textContent = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      certImage.src = '';
      certDescription.textContent = '';
    }
  });
});
