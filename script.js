let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

setInterval(() => {
  moveSlide(1);
}, 4000);  // Cambia de imagen cada 3 segundos

showSlide(currentIndex);
