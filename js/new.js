$(document).ready(function() {

  $('.work').click(function() {
    $('#spotlight').hide();
    $('#contact').hide();
    $('#work').fadeIn();
    $('html,body').animate({
        scrollTop: $('#work').offset().top
      },
      'slow');
  });

  $('.contact').click(function() {
    $('#work').hide();
    $('#spotlight').hide();
    $('#contact').fadeIn();
    $('html,body').animate({
        scrollTop: $('#contact').offset().top
      },
      'slow');
  });

  $('.spotlight').click(function() {
    $('#work').hide();
    $('#contact').hide();
    $('#spotlight').fadeIn();
    $('html,body').animate({
        scrollTop: $('#spotlight').offset().top
      },
      'slow');
  });

});
