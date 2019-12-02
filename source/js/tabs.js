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