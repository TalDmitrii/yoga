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