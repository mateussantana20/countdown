const countdown = () => {
  const countDate = new Date("December 31, 2022 00:00:00").getTime();
  const dateNow = new Date().getTime();
  const gap = countDate - dateNow;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".second div").innerHTML = textSecond;
  document.querySelector(".minute div").innerHTML = `${textMinute} : `;
  document.querySelector(".hour div").innerHTML = `${textHour} : `;
  document.querySelector(".day div").innerHTML = `${textDay} : `;
};

setInterval(countdown, 1000);
