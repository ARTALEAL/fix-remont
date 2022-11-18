const slider = document.querySelector('.slider__row');
const slides = slider.querySelectorAll('.slider__item');
const prevSlide = slider.querySelector('.slider__button_prev');
const nextSlide = slider.querySelector('.slider__button_next');

let state = 0;
let step = slides[0].clientWidth;

nextSlide.addEventListener('click', () => {
  slides.forEach(slider => {
    slider.setAttribute('style', `transform: translate3d(${state - step}px, 0, 0)`);
    console.log(state);
  })
  state = state - step;

  if (state < 0) {
    nextSlide.setAttribute('disabled', '');
    prevSlide.removeAttribute('disabled', '');
  }
});

prevSlide.addEventListener('click', () => {
  slides.forEach(slider => {
    slider.setAttribute('style', `transform: translate3d(${state + step}px, 0, 0)`);
    console.log(state);
  })

  state += step;

  if (state > 0) {
    prevSlide.setAttribute('disabled', '');
    nextSlide.setAttribute('disabled', '');
  }
})


