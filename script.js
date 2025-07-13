const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const modalClose = document.querySelector('.video-modal-close');

if (modalClose && videoModal && videoIframe) {
  modalClose.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoIframe.src = '';
    document.body.style.overflow = 'auto';
  });

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = 'none';
      videoIframe.src = '';
      document.body.style.overflow = 'auto';
    }
  });
} 