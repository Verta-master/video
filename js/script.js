jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".main").addClass('main--scroll');
  } else {
    $(".main").removeClass('main--scroll');
  };
});

//Range slider
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 15,
    max: 55,
    values: [ 24, 40 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + ' сек.');
      $( "#amount-max" ).val( ui.values[ 1 ] + ' сек.');
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + ' сек.');
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + ' сек.');
});
  
//Show & hide brief
$('#price').click(function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $(".main").addClass('main--brief');
  $('.brief').addClass('brief--show');
})
  
$("body").click(function(){
  $('.brief').removeClass('brief--show');
  $(".main").removeClass('main--brief');
});

$("body").keydown(function(evt) {
  if (evt.keyCode == 27) {
    $('.brief').removeClass('brief--show');
    $(".main").removeClass('main--brief');
  }
});

//Show & hide main iframe
  $('.promo__play').click(function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $('.promo__iframe').addClass('promo__iframe--show');
})
  
$("body").click(function(){
  $('.promo__iframe').removeClass('promo__iframe--show');
});

$("body").keydown(function(evt) {
  if (evt.keyCode == 27) {
    $('.promo__iframe').removeClass('promo__iframe--show');
  }
});
});