// Slider
const slider = document.querySelector('.slider__row');
const slides = slider.querySelectorAll('.slider__item');
const prevSlide = slider.querySelector('.slider__button_prev');
const nextSlide = slider.querySelector('.slider__button_next');

let state = 0;
// let step = slides[0].clientWidth;

const checkSlide = () => slides[0].clientWidth;

nextSlide.addEventListener('click', () => {
  step = checkSlide();
  slides.forEach(slider => {
    slider.setAttribute('style', `transform: translate3d(${state - step}px, 0, 0)`);
  });


  state = state - step;

  if (state == -step) {
    nextSlide.setAttribute('disabled', '');
    prevSlide.removeAttribute('disabled', '');
  } else if (state == 0) {
    prevSlide.removeAttribute('disabled', '');
    nextSlide.removeAttribute('disabled', '');
  }
});

prevSlide.addEventListener('click', () => {
  step = checkSlide();
  slides.forEach(slider => {
    slider.setAttribute('style', `transform: translate3d(${state + step}px, 0, 0)`);
  });

  state += step;

  if (state == step) {
    prevSlide.setAttribute('disabled', '');
    nextSlide.removeAttribute('disabled', '');
  } else if (state == 0) {
    prevSlide.removeAttribute('disabled', '');
    nextSlide.removeAttribute('disabled', '');
  }
});

//Inputs check
const numberLabel = document.querySelector('.phone_label');
const phoneInput = document.querySelector('.subscribe__input_novalidate');
const nameInput = document.querySelector('.name_input');
const nameLabel = document.querySelector('.name_label');
const mailInput = document.querySelector('.mail_input');
const mailLabel = document.querySelector('.mail_label');

phoneInput.addEventListener('keyup', () => {
  if (phoneInput.value != '') {
    numberLabel.classList.add('subscribe__input-label_active');
  } else {
    numberLabel.classList.remove('subscribe__input-label_active');
  }
});

nameInput.addEventListener('keyup', () => {
  if (nameInput.value != '') {
    nameLabel.classList.add('subscribe__input-label_invalid');
  } else {
    nameLabel.classList.remove('subscribe__input-label_invalid');
  }
});

mailInput.addEventListener('keyup', () => {
  if (mailInput.value != '') {
    mailLabel.classList.add('subscribe__input-label_invalid');
  } else {
    mailLabel.classList.remove('subscribe__input-label_invalid');
  }
});

//subscribe
const formWrapper = document.querySelector('.subscribe__wrapper');
const buttonSubscribe = formWrapper.querySelector('.subscribe__button');
const subscribeForm = formWrapper.querySelector('.subscribe__form');
const template =
  `<h2 class="subscribe__main-title"> Узнайте о запуске сервиса первым </h2>
    <div class="subscribe__confirm">
      <img src="./images/subscribe-ok.svg" alt="вы подписаны">
        <p class="subscribe__gift-text"> Спасибо! Мы будем держать вас в курсе обновлений </p>
    </div>`;

function isFormValid(form) {
  const inputs = form.querySelectorAll('.input');
  let valid = true;
  inputs.forEach((input) => {
    if (input.type !== 'submit' && input.type !== 'button') {
      if (!input.checkValidity()) {
        valid = false;
      }
    }
  });
  return valid
}

isFormValid(subscribeForm);

buttonSubscribe.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (isFormValid(subscribeForm)) {
    formWrapper.textContent = '';
    formWrapper.insertAdjacentHTML('beforeend', template);
  }
});

