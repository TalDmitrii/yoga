'use strict';

(function () {
  var SUCCESS_RESPONSE_STATUS = 200;

  // Отправляет данные на сервер.
  // @param {object} data - Содержит данные формы, которые будут отправлены на сервер.
  // @param {function} onLoad - Функция обратного вызова, которая срабатывает при успешном выполнении запроса.
  // @param {function} onError - Функция обратного вызова, которая срабатывает при неуспешном выполнении запроса.
  function upload(data, onLoad, onError) {
    var URL = 'https://echo.htmlacademy.ru';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_RESPONSE_STATUS) {
        onLoad(xhr.status);
      } else {
        onError(xhr);
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  }

  // Экспортирует в глобальную область видимости функции для взаимодействия с удаленным севером через XHR.
  window.backend = {
    upload: upload
  };
})();

'use strict';

(function () {
  var page = document.querySelector('body');
  var form = page.querySelector('.js-form');

  if (!form) return;

  var inputs = form.querySelectorAll('input');
  var overlay = page.querySelector('.overlay');
  var successMessage = page.querySelector('#success').content.querySelector('.success');
  var errorMessage = page.querySelector('#error').content.querySelector('.error');
  var message;
  var closeMessageButton;
  var ESC_CODE = 27; 


  // Отправляет данные формы.
  form.addEventListener('submit', function (evt) {
    // Сбрасывает стандартное поведение формы.
    evt.preventDefault();

    window.backend.upload(new FormData(form), successUploadForm, errorUploadForm);
  });

  // Функция сообщает о неуспешной попытке загрузки данных.
  function errorUploadForm() {
    // Показывает оверлей.
    showOverlay()

    // Показывает сообщение о неудачной попытке загрузки данных.
    renderMessage(false);

    // Сбрасывает все значения формы.
    setCustomValue();
  }

  // Функция сообщает об успешной попытке загрузки данных.
  function successUploadForm() {
    // Показывает оверлей.
    showOverlay()

    // Показывает сообщение об удачной попытке загрузки данных.
    renderMessage(true);

    // Сбрасывает все значения формы.
    setCustomValue();
  }

  // Показывает оверлей, убирает скролл на странице.
  function showOverlay() {
    overlay.classList.add('overlay--open');
    bodyScrollLock.disableBodyScroll(page);
  }

  // Скрывает оверлей, добавляет скролл на страницу.
  function removeOverlay() {
    overlay.classList.remove('overlay--open');
    bodyScrollLock.enableBodyScroll(page);
  }

  // Удаляет информационное сообщение.
  function removeMessage() {
    page.removeChild(message);
  }

  // Сбрасывает все значения формы на начальные.
  function setCustomValue() {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
      inputs[i].blur();
      inputs[i].parentElement.classList.remove('form__label--valid');
    }
  }

  // Создаёт сообщение о загрузке данных из формы, добавляет обработчики закрытия сообщения.
  // @param {object} isSuccess - Статус сообщения: отправлено или нет.
  function renderMessage(isSuccess) {
    // Создаёт сообщение на основе шаблона в зависимости от статуса 'успешно/неуспешно'.
    if (isSuccess) {
      message = successMessage.cloneNode(true);
      closeMessageButton = message.querySelector('.success__button');
    } else if (!isSuccess) {
      message = errorMessage.cloneNode(true);
      closeMessageButton = message.querySelector('.error__buttons');
    }

    // Добавляет сообщение в 'body'.
    page.appendChild(message);

    // Добавляет анимацию сообщения.
    message.classList.add('modal-form--open');

    // Обработчик закрывает сообщение об отправке данных по ESC.
    document.addEventListener('keydown', onCloseMessageKeydown);

    // Обработчик закрывает сообщение об отправке данных при клике по произвольной области.
    document.addEventListener('click', onWindowClick);

    // Обработчик закрывает сообщение об отправке данных при клике по кнопке.
    closeMessageButton.addEventListener('click', onButtonCloseClick);
  }

  // Закрывает сообщение об отправке данных по ESC.
  function onCloseMessageKeydown(evt) {
    if (evt.keyCode === ESC_CODE) {
      message.classList.remove('modal-form--open');
      message.classList.add('modal-form--close');

      setTimeout(removeOverlay, 400);
      setTimeout(removeMessage, 1000);

      document.removeEventListener('keydown', onCloseMessageKeydown);
      document.removeEventListener('click', onWindowClick);
      closeMessageButton.removeEventListener('click', onButtonCloseClick);
    }
  }

  // Закрывает сообщение об отправке данных при клике по произвольной области.
  function onWindowClick(evt) {
    if (evt.target.className === overlay.className) {
      message.classList.remove('modal-form--open');
      message.classList.add('modal-form--close');

      setTimeout(removeOverlay, 400);
      setTimeout(removeMessage, 1000);

      document.removeEventListener('keydown', onCloseMessageKeydown);
      document.removeEventListener('click', onWindowClick);
      closeMessageButton.removeEventListener('click', onButtonCloseClick);
    }
  }

  // Закрывает сообщение об отправке данных по клику.
  function onButtonCloseClick() {
    message.classList.remove('modal-form--open');
    message.classList.add('modal-form--close');

    setTimeout(removeOverlay, 400);
    setTimeout(removeMessage, 1000);

    document.removeEventListener('keydown', onCloseMessageKeydown);
    document.removeEventListener('click', onWindowClick);
    closeMessageButton.removeEventListener('click', onButtonCloseClick);
  }
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
    }, 100);
  }
})();
'use strict';

(function () {
  var mainNav = document.querySelector('.js-navigation');

  if (!mainNav) return;

  var desktopWidth = 1440;
  var ESC_CODE = 27;

  var elemToHidden = document.querySelector('.page-header__link');
  var navToggle = mainNav.querySelector('.js-navigation__toggle');
  var navList = mainNav.querySelector('.js-navigation__list');
  var overlay = document.querySelector('.js-overlay');

  // Скрывает меню.
  navList.classList.add('main-navigation__list--hidden');

  navToggle.addEventListener('click', function () {
    if (navList.classList.contains('main-navigation__list--hidden')) {
      openMenu();

      navList.addEventListener('click', onMenuClick);
      window.addEventListener('keydown', onEscKeydown);
      window.addEventListener('click', onWindowClick);

    } else {
      closeMenu();

      navList.removeEventListener('click', onMenuClick);
      window.removeEventListener('keydown', onEscKeydown);
      window.removeEventListener('click', onWindowClick);
    }
  });

  function openMenu() {
    navList.classList.remove('main-navigation__list--hidden');

    navToggle.classList.remove('main-navigation__toggle--open');
    navToggle.classList.add('main-navigation__toggle--closed');

    if (document.body.clientWidth < desktopWidth) {
      bodyScrollLock.disableBodyScroll(navList);
      elemToHidden.style.display = 'none';
      overlay.classList.add('overlay--open');
    }
  }

  function closeMenu() {
    navList.classList.add('main-navigation__list--hidden');

    navToggle.classList.add('main-navigation__toggle--open');
    navToggle.classList.remove('main-navigation__toggle--closed');

    if (document.body.clientWidth < desktopWidth) {
      bodyScrollLock.enableBodyScroll(navList);
      elemToHidden.style.display = 'block';
      overlay.classList.remove('overlay--open');
    }
  }

  function onMenuClick(evt) {
    var target = this;

    if (target.classList.contains('js-navigation__list')) {
      closeMenu();
    }
  }

  function onEscKeydown(evt) {
    if (evt.keyCode === ESC_CODE) {
      closeMenu();
    }
  }

  function onWindowClick(evt) {
    var eventPath = evt.path;
    var isElemParent = false;
    var isToggle = false;

    for (var i = 0; i < eventPath.length - 2; i++) {
      if (eventPath[i].classList.contains('js-navigation')) {
        isElemParent = true;
      }

      if (eventPath[i].classList.contains('js-navigation__toggle')) {
        isToggle = true;
      }
    }

    if (!isToggle && !isElemParent) {
      closeMenu();
    }
  }
  
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

(function ($) {
  $('body').on('click', '[href*="#"]', function (evt) {
    var fixedOffset = 0;
    if ($(this.hash).offset() !== undefined) {
      evt.preventDefault();
      $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixedOffset
      }, 1000);
    }
  });
})(jQuery);

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