//--------slider-------------
let addrImg = [
  'img/portfolio/Portfolio_01.png',
  'img/portfolio/Portfolio_01.png',
  'img/portfolio/Portfolio_01.png',
  'img/portfolio/Portfolio_01.png',
  'img/portfolio/Portfolio_01.png',
  'img/portfolio/Portfolio_01.png',
  'img/portfolio/Portfolio_01.png'
];

// click on left arrow
$('.portfolio__arrows_left, .slider-carousel__posit_1, .slider-carousel__posit_2, .slider-carousel__posit_3').on('click', function() {

  for (let i = 0; i < addrImg.length; i++) {
      $('.slider-carousel__img' + i).attr('src', addrImg[i - 1]);
  }

  $('.slider-carousel__img6').attr('src', addrImg[0]);
  addrImg.push(addrImg.shift());
});

// click on right arrow
$('.portfolio__arrows_right, .slider-carousel__posit_5, .slider-carousel__posit_6, .slider-carousel__posit_7').on('click', function() {

  for (let i = 0; i < addrImg.length; i++) {
      $('.slider-carousel__img' + i).attr('src', addrImg[i + 1]);
  }

  $('.slider-carousel__img0').attr('src', addrImg[addrImg.length - 1]);
  addrImg.unshift(addrImg.pop());
});