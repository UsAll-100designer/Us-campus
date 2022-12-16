$('input.radioAccordian').click(function () {
  console.log(this.checked, this.getAttribute('aria-expanded'));
  if (this.checked && this.getAttribute('aria-expanded') == 'true') {
    this.checked = false;
  }
});
