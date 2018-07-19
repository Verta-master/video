jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 50) {
    $(".main").addClass('main--scroll');
    $('h1').fadeOut(100);
    $('.promo__play').fadeOut(100);
    $('.footer').fadeOut();
  } else {
    $(".main").removeClass('main--scroll');
    $('h1').fadeIn();
    $('.promo__play').fadeIn();
    $('.footer').fadeIn();
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
  $('.footer').hide();
  $('.video').hide();
  $('h1').hide();
  $('.promo__play').hide();
})

$('body').keydown(function(evt) {
  if (evt.keyCode == 27) {
    $('.brief').removeClass('brief--show');
    $(".main").removeClass('main--brief');
    $('.footer').show();
    $('.video').show();
    $('h1').show();
    $('.promo__play').show();
  }
});
  
$('.btn-close').click(function() {
  $('.brief').removeClass('brief--show');
  $(".main").removeClass('main--brief');
  $('.footer').show();
  $('.video').show();
  $('h1').show();
  $('.promo__play').show();
});

//Show & hide main iframe
  $('.promo__play').click(function(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $('.promo__video').addClass('promo__video--show');
  $('.header').hide();
  $('.footer').hide();
  $('.video').hide();
});
  
$("body").keydown(function(evt) {
  if (evt.keyCode == 27) {
    $('.promo__video').removeClass('promo__video--show');
    $('.header').show();
    $('.footer').show();
    $('.video').show();
  }
});
  
$('.btn-close--video').click(function() {
  $('.promo__video').removeClass('promo__video--show');
  $('.header').show();
  $('.footer').show();
  $('.video').show();
});
});