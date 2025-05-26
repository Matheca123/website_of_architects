document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carouselExampleControlsNoTouching');
    const bsCarousel = new bootstrap.Carousel(carousel);
    const slideNumber = document.getElementById('slide-number');
    const totalSlides = carousel.querySelectorAll('.carousel-item').length;

  document.getElementById('prev-slide').addEventListener('click', () => {
    bsCarousel.prev();
  });

  document.getElementById('next-slide').addEventListener('click', () => {
    bsCarousel.next();
  });
    carousel.addEventListener('slid.bs.carousel', () => {
    const activeIndex = [...carousel.querySelectorAll('.carousel-item')]
        .findIndex(item => item.classList.contains('active'));
    slideNumber.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    });
});
