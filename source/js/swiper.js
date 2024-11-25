import Swiper from './swiper';

const buttonNext = document.querySelector('.juri__button--next');
const buttonPrev = document.querySelector('.juri__button--prev');


const swiper = new Swiper('.swiper__wrapper', {

  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },

  loop: true,

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

const reviewsSwiper = new Swiper('.swiper2', {
  direction: 'horizontal',
  init: false,
  loop: false,
  simulateTouch: false,
  spaceBetween: 40,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
  },
});

export {swiper, reviewsSwiper };
