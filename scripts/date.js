let hoursElement = document.getElementById("taskbar-hours");
let dateElement = document.getElementById("taskbar-date");

const clock = setInterval(function time() {
  const dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();
  let day = dateNow.getDay();
  let mon = dateNow.getMonth();
  let yr = dateNow.getFullYear();


  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");
  day = day.toString().padStart(2, "0");
  mon = mon.toString().padStart(2, "0");
  yr = yr.toString().padStart(2, "0");

  const timeString = `${hr}:${min}:${sec}`;
  const dateString = `${day}/${mon}/${yr}`;
  hoursElement.innerHTML = timeString;
  dateElement.innerHTML = dateString;

}, 1000);