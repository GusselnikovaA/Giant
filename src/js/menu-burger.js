$(document).ready(function(){
  var burgerAlert = $('.burger_alert');
  var modalMenu = $('#menu_mobile');
  var closeMenu = $('#burger_close');
  var burger = $('.header-burger__line');

  burgerAlert.on('click', function(){
    modalMenu.toggleClass('menu-mobile_active');
    burger.toggleClass('header-burger__line_active');
  });

  $('.menu-list__item').on('click', function(){
    modalMenu.removeClass('menu-mobile_active');
    burger.removeClass('header-burger__line_active');
  });
});