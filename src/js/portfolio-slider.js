let sliderArr = [
  'img/portfolio/slide_01.jpg',
  'img/portfolio/slide_02.jpg',
  'img/portfolio/slide_03.jpg',
  'img/portfolio/slide_04.jpg',
  'img/portfolio/slide_05.jpg',
  'img/portfolio/slide_06.jpg',
  'img/portfolio/slide_07.jpg'
];

// click on right arrow
$('.portfolio__arrows_right').on('click', function() {
  for (let i = 0; i < sliderArr.length; i++) {
      $('.portfolio__img_' + i).attr('src', sliderArr[i + 1]);
  };

  $('.portfolio__img_6').attr('src', sliderArr[0]);
  sliderArr.push(sliderArr.shift());
});

// click on left arrow
$('.portfolio__arrows_left').on('click', function() {
  for (let i = 0; i < sliderArr.length; i++) {
      $('.portfolio__img_' + i).attr('src', sliderArr[i - 1]);
  };

  $('.portfolio__img_0').attr('src', sliderArr[sliderArr.length - 1]);
  sliderArr.unshift(sliderArr.pop());
});