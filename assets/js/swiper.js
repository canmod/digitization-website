

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  freeMode: true,
  freeModeSticky: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
});

const swiper2Thumb = new Swiper(".swiper2-thumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper(".swiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  thumbs: {
    swiper: swiper2Thumb,
  },
});

const swiper3Thumb = new Swiper(".swiper3-thumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper3 = new Swiper(".swiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  thumbs: {
    swiper: swiper3Thumb,
  },
});