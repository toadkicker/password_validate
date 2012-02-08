(function($j){
  var P = $.passwordValidate
  $j.extend(
    P, {
      version: '0.1',
      defaults : {
        events: ['keyup','blur'],
        minLength: 0,
        maxLength: 256,
        timerDelay: 100,
        passwordField: "#account_password",
        passwordFieldValidation:  "#password_warning",
        confirmField: "#account_password_confirm",
        confirmFieldValidation:  "#password_warning"
      },
      match: function() {
        var password = $j(options.passwordField).val();
        var password_confirm = $j(options.confirmField).val();
        console.log(password == password_confirm);
        return (password == password_confirm);
      },

      checkLength: function(){
        var password_length = $j(options.passwordField).val().length;
        if (password_length < options.maxLength)
          $j(options.confirmField).empty().append("Too short. " + options.minLength + "-" + options.maxLength + " characters.");
        else
          $j(options.confirmFieldValidation).empty().append('#{image_tag('/images/radio-checked.png', :style => 'vertical-align:top;width:13px;height:13px;margin-top:1px;')} HIPAA-Compliant');
        }
  });
  // jQuery plugin initialization
  $.fn.passwordValidate = function(options){

  }
})(jQuery);