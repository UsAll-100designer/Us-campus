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
