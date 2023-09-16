const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const zeroSecond = document.querySelector(".zero-second");
const zeroHour = document.querySelector(".zero-hour");
const zeroMinute = document.querySelector(".zero-minute");
let date = new Date();
second.textContent = date.getSeconds();
minute.textContent = date.getMinutes();
hour.textContent = date.getHours();
let clock = setInterval(() => {
   second.textContent = Number(second.textContent) + 1;
   if (second.textContent > 9) {
      zeroSecond.textContent = '';
   } else {
      zeroSecond.textContent = '0';
   }
   if (minute.textContent > 9) {
      zeroMinute.textContent = '';
   } else {
      zeroMinute.textContent = '0';
   }

   if (hour.textContent > 9) {
      zeroHour.textContent = '';
   } else {
      zeroHour.textContent = '0';
   }
   if (second.textContent == 60) {
      second.textContent = 0;
      minute.textContent = Number(minute.textContent) + 1;
   }
   if (minute.textContent == 60) {
      minute.textContent = 0;
      hour.textContent = Number(hour.textContent) + 1;
   }
   if (hour.textContent == 24) {
      hour.textContent = 0;
   }
}, 1000);
