$(document).ready(function() {
  var $scrollTop = $('#hero').height();
  var $navBar = $('#nav_bar').height();
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

    if ($(window).scrollTop() > $scrollTop) {
      $('#nav_bar').addClass('navbar-fixed');
      $('.content').css({'margin-top': $navBar});
    }
    if ($(window).scrollTop() < $scrollTop) {
      $('#nav_bar').removeClass('navbar-fixed');
      $('.content').css({'margin-top':'0px'});
    }
  });
});
