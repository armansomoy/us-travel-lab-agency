$(function () {
  'use strict';


  // WoW Js
  var wow = new WOW({
    offset: 2,
    mobile: false
  })
  wow.init();


  // review-slider
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
  });




});

// review slider
var imgs = $('.slider img');
imgs.each(function () {
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')',
    'background-position': 'center',
    '-webkit-background-size': 'cover',
    'background-size': 'cover',
  });
  $(this).hide();
});


/* init Jarallax */
jarallax(document.querySelectorAll('#book-my'), {
  // scroll, scale, opacity, scale-opacity, scroll-opacity
  type: 'scroll',

  // animation speed
  speed: 0.7,

  // image parallax scroll effect
  height: '300px',
  imgSize: 'cover',
  imgPosition: '50% 50%',
  imgRepeat: 'no-repeat',
});