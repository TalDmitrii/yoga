'use strict';

(function () {
  var swiper = new Swiper('.feedback__slider', {
    autoHeight: true, //enable auto height
    slidesPerView: 1,
    spaceBetween: 30,
    
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
