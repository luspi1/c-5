import { Swiper } from "swiper/bundle";
// Инициализация слайдеров

const swiperRooms = new Swiper(".rooms-swiper", {
  navigation: {
    nextEl: ".rooms-swiper__swiper-button-next",
    prevEl: ".rooms-swiper__swiper-button-prev",
  },

  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 1,
  breakpoints: {
    1024: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    1280: {
      spaceBetween: 0,
      slidesPerView: 1.32,
    },
    1600: {
      spaceBetween: 0,
      slidesPerView: 1.425,
    },
  },
});

const roomsListSwiper = new Swiper(".rooms-list__swiper", {
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const servicesSwiper = new Swiper(".services__swiper", {
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const oneRoomSwiper = new Swiper(".one-room__swiper", {
  //loop: true,
  spaceBetween: 5,
  slidesPerView: 8.5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    576: {
      slidesPerView: 3.5,
    },
    768: {
      slidesPerView: 4.5,
    },
    992: {
      slidesPerView: 6.5,
    },
    1400: {
      slidesPerView: 8.5,
    },
  },
});
const oneRoomSwiper2 = new Swiper(".one-room__swiper2", {
 // loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: oneRoomSwiper,
  },
});

const typicalSwiper = new Swiper(".typical-swiper", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});

const typicalSwiper2 = new Swiper(".typical-swiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: typicalSwiper,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
