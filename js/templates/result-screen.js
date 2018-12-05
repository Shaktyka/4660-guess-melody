import {initialState} from '../data';
import {renderElement, renderScreen} from '../utils.js';
import inclineNouns from '../incline-nouns.js';
import getGameScreen from './game-screen.js';
import countPoints from '../game-points.js';
import backButtonClickHandler from './back-button-handler.js';

const statistics = [4, 5, 8, 10, 11];

const resultTemplate = (data) => `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">${data.title}</h2>
  <p class="result__total result__total--fail">${data.text}</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

// Для успеха:
//<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
//<p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
// или поражения:
// <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>

const resultScreen = (state) => {
  const data = {
    title: `Какая жалость!`,
    text: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
  };
  
  const screen = renderElement(resultTemplate(data));
  
  // Кнопка "Сыграть ещё раз"
  const replayButton = screen.querySelector(`.result__replay`);

  // Открываем приветственный экран при клике
  replayButton.addEventListener(`click`, backButtonClickHandler);
  
  return screen;
};

export default resultScreen;
