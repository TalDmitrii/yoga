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