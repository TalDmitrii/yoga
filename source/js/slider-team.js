'use strict';

(function () {
  var swiper = new Swiper('.team__slider', {
    autoHeight: true, //enable auto height
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
