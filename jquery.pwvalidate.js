(function( $ ){
  var methods = {
    version : function() { return "0.1"},
    init : function( options ) {
      var defaults = $.extend( { 
        events : ['keyup', 'blur'],
        minLength : 0,
        maxLength: 256,
        timerDelay : 100,
        passwordField : "[data-field='pw']",
        passwordFieldValidation :  "[data-field='pw-valid-msg']",
        confirmField : "[data-field='pw-confirm']",
        confirmFieldValidation :  "[data-field='pw-confirm-msg']",
        tooLongMessage : "Password is too long!",
        tooShortMessage : "Password is too short!"
      }, options );
      return this.each(function(){
         $(defaults.passwordField).bind(defaults.events, 'validate.pwvalidate', methods.validate);
       });
    },
    validate: function(){ //the engine
      if( methods.match() ){
        $(defaults.passwordFieldValidation).innerHTML("Word!")
      }
    },
    match : function(){
      var pw1 = $(defaults.pwField).val();
      var pw2 = $(defaults.pwConfirm).val();
      return( pw1 == pw2 );
    },
    length : function(){
      var pw_length = $(settings.passwordField).val().length();
      switch (pw_length) {
        case ( pw_length >= settings.maxLength ) : return settings.tooLongMessage;
        case ( pw_length >= settings.minLength ) : return settings.tooShortMessage;
      }
    },
    minLength : function() {// true = too short
      var pw1 = $(settings.pwField).val().length();
      pw1 < settings.minLength ? true : false;
    },
    delay : function() {// we want a short delay before giving the user feedback, otherwise this is a really annoying plugin
      var timer = 0;
      return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    }
  };
  $.fn.pwvalidate = function( method ) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.pwvalidate' );
    }
  }
})(jQuery);
