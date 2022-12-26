$(window).scroll(function () {
  if ($(window).scrollTop() > 750) {
    $('.contdown-sticky-wrap').addClass('sticky');
  } else {
    $('.contdown-sticky-wrap').removeClass('sticky');
  }
});
