// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { handleFaqControls } from './accordeon';
import { JuriSwiper, reviewsSwiper } from './swiper';
import { validForm } from './form';

handleFaqControls();

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    validForm();
    reviewsSwiper.init();
    JuriSwiper.init();
  });
});
