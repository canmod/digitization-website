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
    mousewheel: true
  });