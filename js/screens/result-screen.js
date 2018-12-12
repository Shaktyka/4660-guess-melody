import {initialState} from '../data';
import {renderElement} from '../utils.js';
import inclineNouns from '../incline-nouns.js';
// import getGameScreen from './game-screen.js';
import {gameResults, countStatistics} from '../game-results.js';
import countPoints from '../game-points.js';
import backButtonClickHandler from '../back-button-handler.js';

const statistics = [4, 5, 8, 10, 11];

// Шаблон экрана результатов
const resultTemplate = (data) => `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За ${data.minutes} ${inclineNouns(data.minutes, [`минута`, `минуты`, `минут`])} и ${data.seconds} ${inclineNouns(data.seconds, [`секунда`, `секунды`, `секунд`])} вы набрали ${data.points} баллов (8 быстрых), совершив ${data.errors} ${inclineNouns(data.errors, [`ошибка`, `ошибки`, `ошибок`])}</p>
  <p class="result__text">${data.result}</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;


const resultScreen = (state) => {

  // Вычисляем кол-во набранных баллов и записываем в объект результата игрока
  state.points = countPoints(state.answers, state.lives);

  // Вычисляем результаты и получаем строку
  const result = gameResults(statistics, state);

  // Записываем в объект результата
  state.result = result;
  state.errors = initialState.lives - state.lives;

  // Считаем время прохождения
  state = countStatistics(state);

  // Рендерим экран с результатами
  const screen = renderElement(resultTemplate(state));

  // Кнопка "Сыграть ещё раз"
  const replayButton = screen.querySelector(`.result__replay`);

  // Открываем приветственный экран при клике
  replayButton.addEventListener(`click`, backButtonClickHandler);

  return screen;
};

export default resultScreen;
