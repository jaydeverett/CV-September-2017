$(document).ready(function() {

  $('.work').click(function() {
    $('#work').fadeIn();
    $('html,body').animate({
        scrollTop: $('#work').offset().top
      },
      'slow');
  });

  $('.contact').click(function() {
    $('#contact').fadeIn();
    $('html,body').animate({
        scrollTop: $('#contact').offset().top
      },
      'slow');
  });

  $('.spotlight').click(function() {
    $('#spotlight').fadeIn();
    $('html,body').animate({
        scrollTop: $('#spotlight').offset().top
      },
      'slow');
  });

});
