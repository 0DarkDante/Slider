let slider = document.querySelector('#slider');
let sliderWrapper = document.querySelector('#slider-wrapper');
let texts = ['IMG/img1.jpg', 'IMG/img2.jpg', 'IMG/img3.jpg'];
let i = 0;
let autoSlideInterval;

slider.src = texts[i];

left.addEventListener('click', function() {
  if (i > 0) {
    i--;
    slider.style.opacity = 0; // Устанавливаем нулевую прозрачность
    setTimeout(function() {
      slider.src = texts[i];
      slider.style.opacity = 1; // Устанавливаем полную прозрачность
    }, 500); // 500 миллисекунд (время анимации)
  }
});

right.addEventListener('click', function() {
  if (i < texts.length - 1) {
    i++;
    slider.style.opacity = 0;
    setTimeout(function() {
      slider.src = texts[i];
      slider.style.opacity = 1;
    }, 500);
  }
});

function autoSlide() {
  if (i < texts.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slider.style.opacity = 0;
  setTimeout(function() {
    slider.src = texts[i];
    slider.style.opacity = 1;
  }, 500);
}

autoSlideInterval = setInterval(autoSlide, 5000);

sliderContainer.addEventListener('mouseenter', function() {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener('mouseleave', function() {
  autoSlideInterval = setInterval(autoSlide, 5000);
});
