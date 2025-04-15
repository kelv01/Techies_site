document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const prevBtn = document.querySelector('.testimonial-nav .prev');
  const nextBtn = document.querySelector('.testimonial-nav .next');
  let slideIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    slideIndex = index;
  }

  prevBtn.addEventListener('click', () => {
    showSlide(slideIndex - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    showSlide(slideIndex + 1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });

  // Auto-scroll every 5 seconds
  setInterval(() => {
    showSlide(slideIndex + 1);
  }, 5000);

  // Initialize slider
  showSlide(slideIndex);
});
