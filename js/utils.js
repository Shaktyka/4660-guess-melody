export const SECOND_PER_MINUTE = 60;
export const LIVE_ADD = 1;
export const ONE_SECOND = 1000;

export const renderPresenter = (element) => {
  const mainSection = document.querySelector(`.main`);
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

export const addZero = (number) => {
  const zero = number.toString().length < 2 ? `0${number}` : number;
  return zero;
};

export const timeConverter = (second) => {
  const time = {};

  const minutes = `${Math.floor(second / SECOND_PER_MINUTE)}`;
  const seconds = `${second % SECOND_PER_MINUTE}`;

  time.minutes = (minutes.length > 1) ? `${minutes}` : `0${minutes}`;
  time.seconds = (seconds.length > 1) ? `${seconds}` : `0${seconds}`;

  return time;
};
