let skillsSection = document.querySelector(".skills"),
  spans = document.querySelectorAll(".skills .skill .prog span"),
  statusSection = document.querySelector(".stats"),
  nums = document.querySelectorAll(".stats .stat .num"),
  started = false,
  Days = document.querySelector(".events .timer .unit .days"),
  Hours = document.querySelector(".events .timer .unit .hours"),
  min = document.querySelector(".events .timer .unit .minutes"),
  sec = document.querySelector(".events .timer .unit .seconds"),
  futureDate = new Date("Dec 31 2023 23:59:59").getTime();
let timer = setInterval(() => {
  let dateNow = new Date().getTime();
  let diffDate = futureDate - dateNow;
  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
  Days.textContent = days < 100 ? `0${days}` : days;
  Hours.textContent = hours < 10 ? `0${hours}` : hours;
  min.textContent = minutes < 10 ? `0${minutes}` : minutes;
  sec.textContent = seconds < 10 ? `0${seconds}` : seconds;

  if (diffDate == 0) {
    clearInterval(timer);
  }
}, 1000);

window.onscroll = function () {
  if (window.scrollY > skillsSection.offsetTop + 500) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
  if (window.scrollY >= statusSection.offsetTop - 100) {
    if (!started) {
      nums.forEach((e) => count(e));
    }
    started = true;
  }
};
function count(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
