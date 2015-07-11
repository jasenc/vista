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

  //Problem: user when clicking on image goes to a dead end
  //Solution: Create an overlay with the large image - lightbox
  var $container = $('<div id="container"></div>');

  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $caption = $("<p></p>");

  $container.append($overlay);

  //add image to overlay
  $overlay.append($image);
  //add caption to overlay
  $overlay.append($caption);

  //add overlay
  $("body").append($container);

  //capture click event on a link to an image
  $("#imageGallery a").click(function( event ) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation).height("80%");

    //show overlay
    $container.show();

    //get child's alt atribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
  });

  //when overlay is clicked
  $container.click(function(){
    //hide the overlay
    $container.hide();
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
