const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button',
  },
  // autoplay: {
  //   delay: 8500,
  //   disableOnInteraction: false,
  // },
  effect: 'fade',
  loop: 'infinite',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});

swiper.on('slideChange', function (sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
});
