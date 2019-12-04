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