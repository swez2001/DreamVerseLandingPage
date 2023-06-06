$(document).ready(function(){
 
    $('.next').click(function() {
      var target = $('.content.active').next('.content');
      if (target.length == 0){
        target = $('.content:first');
      }
      $('html, body').animate({scrollTop: target.offset().top}, 'slow');
      $('.active').removeClass('active');
      target.addClass('active');
   
    });
   
   $('.prev').click(function() {
      var target = $('.content.active').prev('.content');
      if (target.length == 0){
        target = $('.content:first');
      }
      $('html, body').animate({scrollTop: target.offset().top}, 'slow');
      $('.active').removeClass('active');
      target.addClass('active');
  
    });
    
  });