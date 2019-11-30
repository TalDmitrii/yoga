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