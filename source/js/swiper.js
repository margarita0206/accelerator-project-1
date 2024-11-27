import Swiper from 'swiper/bundle';

const JuriSwiper = new Swiper('.swiper', {
  navigation: {
    nextEl: 'juri__button--next',
    prevEl: 'juri__button--prev',
  },

  direction: 'horizontal',
  init: false,
  loop: true,
  simulateTouch: false,
  keyboard: {
    enabled: false,
  },

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 10,
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

export { JuriSwiper, reviewsSwiper };
