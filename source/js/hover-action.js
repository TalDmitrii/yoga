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
