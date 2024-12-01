// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { handleFaqControls } from './accordeon';
import { JuriSwiper, reviewsSwiper } from './swiper';
import { validForm } from './form';
import { priceTabs } from './price';
import { debouncedResize } from './paragraph';
import { videoIframe } from './iframe';

handleFaqControls();
debouncedResize();

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    validForm();
    videoIframe();
    priceTabs();
    reviewsSwiper.init();
    JuriSwiper.init();
  });
});
