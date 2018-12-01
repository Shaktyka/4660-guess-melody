// Экран поражения при завершении количества попыток
import {renderElement} from '../utils.js';
import backButtonClickHandler from './back-button-handler.js';

const failTriesTemplate = () => `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const failTriesScreen = () => {
  const screen = renderElement(failTriesTemplate());

  // Кнопка "Сыграть ещё раз"
  const replayButton = screen.querySelector(`.result__replay`);

  // Открываем приветственный экран при клике
  replayButton.addEventListener(`click`, backButtonClickHandler);

  return screen;
};

export default failTriesScreen;
