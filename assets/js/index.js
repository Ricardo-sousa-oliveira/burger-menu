$(function() {
  console.log( "ready!" );
  $('.hamburger--collapse').on('click', function(){
    $(this).toggleClass('is-active');
    $(this).parent().find('ul').slideToggle();
    
  });
});