// слайдер в блоке отзывов (feedback) 
$('.feedback-slider').slick({
  centerMode: true,
  adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 3000,
  prevArrow: $('.feedback__arrows_left'),
  nextArrow: $('.feedback__arrows_right'),
  responsive: [{
      breakpoint: 1010,
      settings: {
        slidesToShow: 1
      }
    }]
});