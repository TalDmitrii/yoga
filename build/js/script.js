(function () {
    var form = document.querySelector('.js-form');

    if (!form) return;

    // var formOverlay = document.querySelector('.order-form__overlay');
    // var successMessage = document.querySelector('.order-form__message--success');
    // var errorMessage = document.querySelector('.order-form__message--error');

    ESC_CODE = 27;


    // // Отправляет данные формы.
    // form.addEventListener('submit', function (evt) {
    //     // Сбрасывает стандартное поведение формы.
    //     evt.preventDefault();

    //     window.backend.upload(new FormData(form), successUploadForm, errorUploadForm);
    // });


    // // Функция сообщает об успешной попытке загрузки данных.
    // function successUploadForm() {
    //     // Показывает оверлей.
    //     showOverlay();

    //     // Сбрасывает все значения формы, цвет кнопки.
    //     setCustomValue();
    //     btnSubmit.classList.remove('order-form__button--ready');
    //     btnSubmit.classList.add('order-form__button--standart');

    //     // Показывает сообщение об успешной попытке загрузки данных.
    //     showMessage(true);
    // }


    // // Функция сообщает о неуспешной попытке загрузки данных.
    // function errorUploadForm() {
    //     // Показывает оверлей.
    //     showOverlay();

    //     // Показывает сообщение о неуспешной попытке загрузки данных.
    //     showMessage(false);
    // }


    // // Функция показывает оверлей на фоне сообщения.
    // function showOverlay() {
    //     if (formOverlay.classList.contains('order-form__overlay--animation-closed')) {
    //         formOverlay.classList.remove('order-form__overlay--animation-closed');
    //     }
    //     formOverlay.classList.remove('order-form__overlay--hidden');
    //     formOverlay.classList.add('order-form__overlay--animation-opened');
    // }


    // // Сбрасывает значения полей ввода.
    // function setCustomValue() {
    //     for (var i = 0; i < inputs.length; i++) {
    //         inputs[i].value = '';
    //         inputs[i].classList.remove('form__label--valid');
    //     }
    // }


    // // Показывает сообщение об успешной/неуспешной попытке загрузки данных.
    // // @param {boolean} isSuccess - Отправлено/Неотправлено.
    // function showMessage(isSuccess) {
    //     if (isSuccess) {
    //         openMessage(successMessage);

    //         window.addEventListener('keydown', onWindowSuccessMessageKeydown);
    //         window.addEventListener('click', onWindowSuccessMessageClick);   

    //     } else {
    //         openMessage(errorMessage);

    //         window.addEventListener('keydown', onWindowErrorMessageKeydown);
    //         window.addEventListener('click', onWindowErrorMessageClick);
    //     }
    // }


    // // Открывает определённое сообщение о попытке загрузки данных.
    // function openMessage(message) {
    //     if (message.classList.contains('order-form__message--animation-closed')) {
    //         message.classList.remove('order-form__message--animation-closed');
    //     }
    //     message.classList.remove('order-form__message--hidden');
    //     message.classList.add('order-form__message--animation-opened');
    // }


    // // Закрывает сообщение об успешной отправке формы.
    // function onWindowSuccessMessageKeydown(evt) {
    //     if (evt.keyCode === ESC_CODE) {
    //         onWindowSuccessMessageClick();
    //     }
    // }

    
    // // Закрывает сообщение об успешной отправке формы.
    // function onWindowSuccessMessageClick() {
    //     successMessage.classList.add('order-form__message--animation-closed');
    //     successMessage.classList.remove('order-form__message--animation-opened');

    //     closeOverlay();

    //     window.removeEventListener('keydown', onWindowSuccessMessageKeydown);
    //     window.removeEventListener('click', onWindowSuccessMessageClick);
    // }


    // // Закрывает сообщение о неуспешной отправке формы.
    // function onWindowErrorMessageKeydown(evt) {
    //     if (evt.keyCode === ESC_CODE) {
    //         onWindowErrorMessageClick()
    //     }
    // }

    
    // // Закрывает сообщение о неуспешной отправке формы.
    // function onWindowErrorMessageClick() {
    //     errorMessage.classList.add('order-form__message--animation-closed');
    //     errorMessage.classList.remove('order-form__message--animation-opened');

    //     closeOverlay();

    //     window.removeEventListener('keydown', onWindowErrorMessageKeydown);
    //     window.removeEventListener('click', onWindowErrorMessageClick);
    // }


    // // Функция скрывает оверлей на фоне сообщения.
    // function closeOverlay() {
    //     formOverlay.classList.add('order-form__overlay--animation-closed');
    //     formOverlay.classList.remove('order-form__overlay--animation-opened');
    // }

})();
'use strict';

(function () {
  var actionBlock = document.querySelectorAll('.subscription__variant');

  if (!actionBlock) return;

  for (var i = 0; i < actionBlock.length; i++) {
    actionBlock[i].addEventListener('mouseover', onBlockMouseoverHandler);
  }

  function onBlockMouseoverHandler(evt) {
    var actionElement = this;

    // Если событие произошло на активном элементе - выходит из функции.
    if (actionElement.classList.contains('subscription__variant--active')) {
      return;
    }

    // Находит родительский блок активного элемента и всех его потомков.
    var parentActionElement = actionElement.parentElement;
    var childrenParent = parentActionElement.children;

    // Находит потомка с активным классом, и удаляет у него активный класс.
    for (var i = 0; i < childrenParent.length; i++) {
      if (childrenParent[i].classList.contains('subscription__variant--active')) {
        childrenParent[i].classList.remove('subscription__variant--active');
      }
    }

    // Добавляет активному элементу соответствующий класс.
    actionElement.classList.add('subscription__variant--active');
  }

})();

'use strict';

(function () {
  var form = document.querySelector('.js-form');

  if (!form) return;

  var inputs = form.querySelectorAll('input');
  var btnSubmit = form.querySelector('.js-form-button');
  var checkStatus = false;
  ESC_CODE = 27;
  

  // Обработка полей формы.
  // 
  // Добавляет всем полям формы обработчик события.
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', onInputCheck);
  }

  // Проверяет поля с задержкой, даёт отработать маске полей.
  function onInputCheck(evt) {
    setTimeout(function () {
      // Проверка полей ввода, и смена цвета рамок этих полей, в зависимости от валидности.
      var input = evt.target;
      var inputParent = input.parentElement;

      // Если значение поля верно.
      if (input.validity.valid === true) {
        if (!inputParent.classList.contains('form__label--valid')) {
          inputParent.classList.add('form__label--valid');
        }
      }

      // Если значение поля неверно и оно не пустое.
      if ((input.validity.valid === false) && (input.value.length > 0) ) {
        if (inputParent.classList.contains('form__label--valid')) {
          inputParent.classList.remove('form__label--valid');
        }
      }

      // Если значение поля стало пустым, удаляет классы статуса поля.
      if (input.value.length === 0) {
        if (inputParent.classList.contains('form__label--valid')) {
          inputParent.classList.remove('form__label--valid');
        }
      }


      // Смена цвета кнопки отправки.
      // Проверяет валидность всех инпутов.
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].validity.valid === false) {
          checkStatus = false;
        } else {
          checkStatus = true;
        }
      }

        // // Если все инпуты валидны, меняет цвет кнопки
        // if (checkStatus === true) {

        //     if (btnSubmit.classList.contains('order-form__button--standart')) {
        //       btnSubmit.classList.remove('order-form__button--standart');
        //     }
        //     btnSubmit.classList.add('order-form__button--ready');

        // } else {

        //     if (btnSubmit.classList.contains('order-form__button--ready')) {
        //       btnSubmit.classList.remove('order-form__button--ready');
        //     }

        //     btnSubmit.classList.add('order-form__button--standart');
        // }
    }, 100);
  }
})();
'use strict';

(function () {
  var mainNav = document.querySelector('.js-navigation');

  if (!mainNav) return;

  var navToggle = mainNav.querySelector('.js-navigation__toggle');
  var navList = mainNav.querySelector('.js-navigation__list');

  // Скрывает меню.
  navList.classList.add('main-navigation__list--hidden');

  navToggle.addEventListener('click', function () {
    if (navList.classList.contains('main-navigation__list--hidden')) {
      navList.classList.remove('main-navigation__list--hidden');

      navToggle.classList.remove('main-navigation__toggle--open');
      navToggle.classList.add('main-navigation__toggle--closed');
    } else {
      navList.classList.add('main-navigation__list--hidden');

      navToggle.classList.add('main-navigation__toggle--open');
      navToggle.classList.remove('main-navigation__toggle--closed');
    }
  });

  // console.log(navList, navToggle);
})();
'use strict';

(function() {
  if ($('.js-phone-mask').length) {
    $('.js-phone-mask').inputmask({
      "mask": "+7 (999) 999-99-99",
      "placeholder": "+7 (___) ___-__-__",
      "showMaskOnHover": false
    });
  }
})();

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

'use strict';

(function () {
  var tabsSection = document.querySelector('.tabs');

  if (!tabsSection) return;

  var blockTabs = tabsSection.querySelector('.block-tabs');
  var tabs = blockTabs.querySelectorAll('.block-tabs__tab');
  var tabsContent = tabsSection.querySelectorAll('.tabs__content')
  var indexSecondElem = 1;

  hideTabsContent(indexSecondElem);

  function hideTabsContent(tabNumber) {
    for (var i = tabNumber; i < tabsContent.length; i++) {
      tabsContent[i].classList.remove('tabs__content--show');
      tabsContent[i].classList.add('tabs__content--hide');
      tabs[i].classList.remove('block-tabs__tab--active');
    }
  }

  function showTabsContent(containerNumber) {
    if (tabsContent[containerNumber].classList.contains('tabs__content--hide')) {
      hideTabsContent(0);
      tabs[containerNumber].classList.add('block-tabs__tab--active');
      tabsContent[containerNumber].classList.remove('tabs__content--hide');
      tabsContent[containerNumber].classList.add('tabs__content--show');
    }
  }

  blockTabs.addEventListener('click', function(evt) {
    var target = evt.target;
    evt.preventDefault();

    if (target.classList.contains('block-tabs__tab')) {
      for (var i = 0; i < tabs.length; i++) {
        if (target == tabs[i]) {
          showTabsContent(i);
          break;
        }
      }
    }
  });
})();