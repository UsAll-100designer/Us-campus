// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 4,
//   centeredSlides: true,
//   spaceBetween: 30,
//
// });

// 프로그래스 바
// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 3,
//   spaceBetween: 0,
//   slidesPerGroup: 1,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//   },
// });

//다이나믹 페이지네이션
// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 3,
//   spaceBetween: 0,
//   slidesPerGroup: 1,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//   },
// });

//네비게이션
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
