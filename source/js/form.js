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