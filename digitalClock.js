let hour = document.getElementById('hourContainer');
let minute = document.getElementById('minuteContainer');
let second = document.getElementById('secondContainer');
let session = document.getElementById('sessionContainer');
let days = document.getElementById('day');
let months = document.getElementById('month');
let dates = document.getElementById('date');
let years = document.getElementById('year');
// console.log(days);

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let day = date.getDay();
  let month = date.getMonth();
  let todayDate = date.getDate();
  let year = date.getFullYear();
  let sessions = 'AM';

  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const everyMonth = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  if (h >= 12) {
    sessions = 'PM';
  }

  if (h === 0) {
    sessions = 'AM';
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;
  session.textContent = sessions;
  days.textContent = weekDay[day];
  months.textContent = everyMonth[month];
  dates.textContent = todayDate;
  years.textContent = year;

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  session.innerText = sessions;
  days.innerText = weekDay[day];
  months.innerText = everyMonth[month];
  dates.innerText = todayDate;
  years.innerText = year;
  setTimeout(showTime, 1000);
}

showTime();
