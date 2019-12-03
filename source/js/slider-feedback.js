'use strict';

(function () {
  var windowSize;
  var tabletWidth = 768;
  var desktopWidth = 1440;
  var slidesPerView;
  var sliderSpaceBetween;
  var sliderTypePagination;

  setSliderSettings();

  function setSliderSettings() {
    windowSize = document.body.clientWidth;

    if (windowSize < tabletWidth) {
      slidesPerView = 1;
      sliderSpaceBetween = 50;
      sliderTypePagination = 'fraction';
      
    } else if ((windowSize >= tabletWidth) && (windowSize < desktopWidth)) {
      slidesPerView = 2;
      sliderSpaceBetween = 50;
      sliderTypePagination = 'bullets';

    } else if (windowSize >= desktopWidth) {
      slidesPerView = 2;
      sliderSpaceBetween = 40;
      sliderTypePagination = 'custom';
    }
  }


  var mySlider = new Swiper('.feedback__slider', {
    autoHeight: true,
    slidesPerView: slidesPerView,
    spaceBetween: sliderSpaceBetween,
    grabCursor: true,
    
    pagination: {
      el: '.swiper-pagination',
      type: sliderTypePagination,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  function changeSliderSettings() {
    setSliderSettings();

    mySlider.params.slidesPerView = slidesPerView;
    mySlider.params.spaceBetween = sliderSpaceBetween;
    mySlider.params.pagination.type = sliderTypePagination;
    
    mySlider.update();
  };



  window.addEventListener('resize', changeSliderSettings);


})();
