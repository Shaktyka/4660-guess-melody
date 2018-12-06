// Экран отображения результатов игры в случае успеха
import {renderElement} from '../utils.js';
import backButtonClickHandler from './back-button-handler.js';
import {initialState} from '../data';
// import countPoints from '../game-points.js';

const successTemplate = () =>`<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
  <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
  <button class="result__replay" type="button">Сыграть ещё раз</button>
</section>`;

const successScreen = () => {

  // Рендерим элемент
  const screen = renderElement(successTemplate(initialState));

  // Сыграть ещё раз
  const replayButton = screen.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, backButtonClickHandler);

  return screen;
};

export default successScreen;
