import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export const bannerSlider = {
  preloadImages: false,
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  resistance: true,
  resistanceRatio: 0.6,
  speed: 1400,
  spaceBetween: 0,
  parallax: false,
  effect: "slide",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".banner-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".banner-slider-button-next",
    prevEl: ".banner-slider-button-prev",
  },
};
export const feedBackSlider = {
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};
export const footerSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
export const sponsorsSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 30, slidesPerView: 1 },
    600: { spaceBetween: 30, slidesPerView: 2 },
    768: { spaceBetween: 30, slidesPerView: 3 },
    992: { spaceBetween: 30, slidesPerView: 4 },
    1000: { spaceBetween: 30, slidesPerView: 5 },
  },
};
export const roomsSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 30, slidesPerView: 1 },
    768: { spaceBetween: 30, slidesPerView: 2 },
    1000: { spaceBetween: 30, slidesPerView: 3 },
  },
};
export const imageSlider = {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 0, slidesPerView: 1 },
    600: { spaceBetween: 0, slidesPerView: 2 },
    992: { spaceBetween: 0, slidesPerView: 3 },
    1200: { spaceBetween: 0, slidesPerView: 4 },
    1600: { spaceBetween: 0, slidesPerView: 5 },
  },
};
export const testimonialSlider = {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 0, slidesPerView: 1 },
    768: { spaceBetween: 0, slidesPerView: 1 },
    992: { spaceBetween: 0, slidesPerView: 1 },
    1200: { spaceBetween: 0, slidesPerView: 3 },
  },
};
