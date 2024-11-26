// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { handleFaqControls } from './accordeon';
import { swiper, reviewsSwiper } from './swiper';
import { validForm } from './form';

handleFaqControls();

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    validForm();
    reviewsSwiper.init();
    swiper.init();
  });
});
