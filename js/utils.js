export const renderPresenter = (element) => {
  const mainSection = document.querySelector(`.main`);
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

export const addZero = (number) => {
  const zero = number.toString().length < 2 ? `0${number}` : number;
  return zero;
};

export const tick = (state) => {
  state = Object.assign({}, state, {
    time: state.time - 1000
  });
  // updateHeader();
};
