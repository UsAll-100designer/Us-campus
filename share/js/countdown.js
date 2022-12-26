(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '12/28/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById('days').innerText = Math.floor(distance / day)),
        (document.getElementById('hours').innerText = Math.floor((distance % day) / hour)),
        (document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute)),
        (document.getElementById('seconds').innerText = Math.floor((distance % minute) / second));
    }, 0);
})();

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '12/29/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById('STdays').innerText = Math.floor(distance / day)),
        (document.getElementById('SThours').innerText = Math.floor((distance % day) / hour)),
        (document.getElementById('STminutes').innerText = Math.floor((distance % hour) / minute)),
        (document.getElementById('STseconds').innerText = Math.floor((distance % minute) / second));
    }, 0);
})();
