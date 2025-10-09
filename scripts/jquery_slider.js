$(document).ready(function(){
  $('.news__slider_line').slick({
    appendDots: $('.slider__dots'),
    arroys: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arroys: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arroys: true
        }
      }
    ]
  });
});



// ////////////////////////////////////////////////////
$(document).ready(function(){
  $('.slider').slick({
    arroys: true,
    dots: true,
    adapriveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arroys: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arroys: true
        }
      }
    ]
  });
});
