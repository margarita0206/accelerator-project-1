// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { displayPrices } from './price';
import { DEFAULT_SERVICE_TIME } from './const';
import { updateFaqControls } from './accordeon';

displayPrices(DEFAULT_SERVICE_TIME);
updateFaqControls();
