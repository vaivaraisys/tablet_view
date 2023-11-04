function openLightbox(imageSrc, description) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxDescription = document.getElementById("lightbox-description");
  
    lightboxImage.src = imageSrc;
    lightboxImage.alt = description;
    lightboxDescription.textContent = description;
    lightbox.classList.remove("hidden");
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
  }