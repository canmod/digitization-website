let swiperSlides = document.getElementById('swiper');
let numberOfSlides = swiperSlides.querySelectorAll('.swiper-slide').length;

const swiper = new Swiper('.swiper', {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      if ((index + 1) === numberOfSlides) {
        return '<span class="' + className + '">' + `${index + 1}` + '</span><div class="connector">';
      } else {
        return '<span class="' + className + '">' + `${index + 1}` + '</span>';
      }
    },
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

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