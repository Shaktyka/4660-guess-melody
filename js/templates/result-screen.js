import {initialState} from '../data';
import {renderElement, renderScreen} from '../utils.js';
import inclineNouns from '../incline-nouns.js';
import getGameScreen from './game-screen.js';
import countPoints from '../game-points.js';
import backButtonClickHandler from './back-button-handler.js';

const resultTemplate = (data) => `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">${data.title}</h2>
  <p class="result__total result__total--fail">${data.text}</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

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
