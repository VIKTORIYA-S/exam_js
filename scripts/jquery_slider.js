$(document).ready(function(){
  $('.news__slider_line').slick({
    appendDots: $('.slider__dots'),
    arroys: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    // slidesToScroll: 1
  });
});


// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });



// $(document).ready(function () {

//         $(function () {
//             var mySwiper = $('.swiper-container').swiper({
//                 mode: 'vertical',
//                 watchActiveIndex: true,
//                 loop: true,
//                 onSlideChangeStart: function (swiper) {
//                     console.log('slide change start - before');
//                     console.log(swiper);
//                     console.log(swiper.activeIndex);
//                     //before Event use it for your purpose
//                 },
//                 onSlideChangeEnd: function (swiper) {
//                     console.log('slide change end - after');
//                     console.log(swiper);
//                     console.log(swiper.activeIndex);
//                     //after Event use it for your purpose
//                     if (swiper.activeIndex == 1) {
//                         //First Slide is active
//                         console.log('First slide active')
//                     }
//                 }
//             });
//         })

//     });