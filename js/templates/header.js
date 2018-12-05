import {renderElement} from '../utils.js';
// import {initialState} from '../data.js';
import {addZero} from '../utils';
import backButtonClickHandler from './back-button-handler.js';
// import welcomeScreen from './welcome-screen.js';

const headerTemplate = (state) => {
  const minutes = addZero(new Date(state.time).getMinutes());
  const seconds = addZero(Math.round((state.time - minutes * 60 * 1000) / 1000));

  const headerBlock = `<header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">${minutes}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">${seconds}</span>
      </div>

      <div class="game__mistakes">
        ${new Array(state.lives).fill(`<div class="wrong"></div>`).join(``)}
      </div>
    </header>`;

  return headerBlock;
};

const header = (state) => {

  const headerElement = renderElement(headerTemplate(state));

  // Ссылка "Вернуться в начало" + слушатель
  const backButton = headerElement.querySelector(`.game__back`);
  backButton.addEventListener(`click`, backButtonClickHandler);

  return headerElement;
};

export default header;
