var images = [];
var currentImage = 0;
var totalImages;

$(document).ready(function(){
	createPhotoContainers(startListen);
});

function createPhotoContainers(callback){
  $("body").append("<div id=\"darken\"><div id=\"photo\"></div></div>");
  $("#darken").css({
    "display": "none",
    "z-index": 1,
    "background": "rgba(0,0,0,0.8)",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": "100%",
    "height": "100%"
  });
  $("#photo").css({
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "contain",
    "width": "100%",
    "height": "100%",
    "text-align": "center"
  });

  typeof callback == "function" ? callback() : null;
}

function hidePhotoContainers(){
  $("#darken").fadeOut(150);
}

function showPhotoContainers(){
  $("#darken").fadeIn(150);
}

function adaptPhoto() {
  var photo = $("#photo");

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var photoHeight = photo.find("img").height();
  var photoWidth = photo.find("img").width();

  var offsetTop = $(document).scrollTop();
  photo.css("top", offsetTop);
}

// Photo and darkening background appears when a automage target container is clicked

function startListen(callback){
  $(document).on("click", ".am-target-container img.am-target", function(e){
    e.preventDefault();

    container = $(this).parent();
    imgSrc = $(this).attr("src");
    imgAlt = $(this).attr("alt");

    $("#photo").css({
      "background-image": "url('"+imgSrc+"')"
    });

    if ( $(container).hasClass('am-slider') && images.length < 1 ) {
      $(container).children('.am-target').each( function(){
        images.push($(this).attr('src'))
        currentImage = $.inArray(imgSrc, images);
        totalImages = images.length - 1;
      });

      listenForSlides();
    }

    adaptPhoto();
    showPhotoContainers();
    $(document).trigger("scroll");

    typeof callback == "function" ? callback() : null;
  });
}

// They disappear when the background is clicked...
$(document).on("click", "#darken", function(){
  hidePhotoContainers();
});

// ...or when the photo itself is clicked...
$(document).on("click", "#photo", function(){
  hidePhotoContainers();
});

// ...or when ESC is pressed.
$(document).keydown( function(e){
  if( e.keyCode == 27 ) {
    hidePhotoContainers();
  }
});

// slider + right arrow
function listenForSlides() {
  $(document).keydown( function(e){
    if( e.keyCode == 39 ) {
      currentImage == totalImages ? currentImage = 0 : currentImage += 1;

     console.log(currentImage);

      $("#photo").css({
        "background-image": "url('"+images[currentImage]+"')"
      });

      adaptPhoto();
    }
  });
}

// Make the divs follow scroll
$(document).scroll(function(){
  $("#darken").css( "top", $(this).scrollTop() );
  $("#darken").css( "left", $(this).scrollLeft() );

  adaptPhoto();
});

// Update photo size/location when window is resized
$(window).resize(function(){
  adaptPhoto();
});
