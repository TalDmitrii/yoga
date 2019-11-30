'use strict';

// (function ($) {
// //   $(document).ready(function(){
// //     // $(selector).inputmask("99-9999999");  //static mask
// //     // $(selector).inputmask({"mask": "(999) 999-9999"}); //specifying options
// //     $('.js-phone-mask').inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax



//     if ($('.js-phone-mask').length) {
//       $('.js-phone-mask').inputmask({
//           "mask": "+7 (999) 999-99-99",
//           "placeholder": "+7 (___) ___-__-__",
//           "showMaskOnHover": false
//       });
//     }

// })(jQuery);

(function ($) {
  $(document).ready(function(){
    // $('.js-phone-mask').inputmask("99-9999999");  //static mask
    // $(selector).inputmask({"mask": "(999) 999-9999"}); //specifying options
    $('.js-phone-mask').inputmask("+7 (999) 999-99-99"); //mask with dynamic syntax
  });
})(jQuery);
