'use strict';

(function () {
  var windowSize = document.body.clientWidth;
  var tabletWidth = 768;
  var slidesPerView;

  setSliderSettings();

  function setSliderSettings() {
    if (windowSize < tabletWidth) {
      slidesPerView = 1;
    } else {
      slidesPerView = 2;
    }
  }

  var swiper = new Swiper('.team__slider', {
    autoHeight: true,
    slidesPerView: slidesPerView,
    spaceBetween: 50,
    updateOnWindowResize: true,
    grabCursor: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  function changeSliderSettings() {
    windowSize = document.body.clientWidth;

    if (windowSize < tabletWidth) {
      swiper.params.slidesPerView = 1;
    } else {
      swiper.params.slidesPerView = 2;
    }

    swiper.update();
  };

  window.addEventListener('resize', changeSliderSettings);
})();
