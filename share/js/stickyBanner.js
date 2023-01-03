if (window.matchMedia('(min-width: 960px)').matches) {
  /* 뷰포트 너비가 960 픽셀 이상 */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 750) {
      $('.countdown-sticky-wrap').addClass('sticky');
    } else {
      $('.countdown-sticky-wrap').removeClass('sticky');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 2300) {
      $('.right-sticky').addClass('Rsticky');
    } else {
      $('.right-sticky').removeClass('Rsticky');
    }
  });
} else {
  /* 뷰포트 너비가 960 픽셀 미만 */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 750) {
      $('.countdown-sticky-wrap').addClass('sticky');
    } else {
      $('.countdown-sticky-wrap').removeClass('sticky');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 2300) {
      $('.right-sticky').addClass('');
    } else {
      $('.right-sticky').removeClass('');
    }
  });
}
