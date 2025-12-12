document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".carousel-track .slide"));
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let index = 0;

  // calcula largura do slide atual (respeita responsividade)
  function updateCarousel() {
    if (!slides.length) return;
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // suporta swipe (simples) — opcional, útil em mobile
  let startX = 0;
  track.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
  track.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) index = (index + 1) % slides.length;
      else index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  // inicia posicionado certo após carregar imagens
  window.addEventListener("load", updateCarousel);
  // caso as imagens sejam carregadas dinamicamente:
  slides.forEach(img => img.addEventListener('load', updateCarousel));
});
