// слайдер в блоке отзывов (feedback) 
$('.feedback-slider').slick({
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  speed: 3000,
  prevArrow: $('.feedback__arrows_left'),
  nextArrow: $('.feedback__arrows_right'),
  responsive: [{
      breakpoint: 1010,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }]
});