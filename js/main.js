$(document).ready(function() {
  var $scrollTop = $('#hero').height();
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
    console.log($scrollTop);
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > $scrollTop) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < $scrollTop) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});
