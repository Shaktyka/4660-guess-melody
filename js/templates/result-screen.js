import {initialState} from '../data';
import {renderElement} from '../utils.js';
import inclineNouns from '../incline-nouns.js';
// import getGameScreen from './game-screen.js';
import {gameResults} from '../game-results.js';
import countPoints from '../game-points.js';
import backButtonClickHandler from './back-button-handler.js';

const statistics = [4, 5, 8, 10, 11];

/*
Ориентировочная схема:
1. ++ Получаем сюда результаты игрока.
2. ++ Вычисляем кол-во набранных баллов
3. ++ Передаём их в ф-цию gameResults
4. ++ Вычисляем нужные значения
5. Подставляем в текстовые строки
6. Строки вкладываем в шаблон
7. Рендерим шаблон
*/

const resultTemplate = (data) => `<section class="result">
  <div class="result__logo">
    <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
  </div>
  <h2 class="result__title">Вы настоящий меломан!</h2>
  <p class="result__total">За 3 минуты и 25 секунд вы набрали ${data.points} баллов (8 быстрых), совершив ${initialState.lives - data.lives} ${inclineNouns(initialState.lives - data.lives, [`ошибка`, `ошибки`, `ошибок`])}</p>
  <p class="result__text">${data.result}</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

// Для успеха:
// <p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
// <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
// или поражения:
// <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>

const resultScreen = (state) => {

  // Вычисляем кол-во набранных баллов и записываем в объект результата игрока
  state.points = countPoints(state.answers, state.lives);

  // Вычисляем результаты и получаем строку
  const result = gameResults(statistics, state);

  // Записываем в объект результата
  state.result = result;
  
  // Рендерим экран с результатами
  const screen = renderElement(resultTemplate(state));

  // Кнопка "Сыграть ещё раз"
  const replayButton = screen.querySelector(`.result__replay`);

  // Открываем приветственный экран при клике
  replayButton.addEventListener(`click`, backButtonClickHandler);

  return screen;
};

export default resultScreen;
