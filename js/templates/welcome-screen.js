// Экран приветствия
import {renderElement, renderScreen} from '../utils.js';
import inclineNouns from '../incline-nouns.js';
import {initialState} from '../data';
import genreScreen from './genre-screen.js';

const welcomeTemplate = (state) => `<section class="welcome">
<div class="welcome__logo">
  <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83">
</div>
<button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
<h2 class="welcome__rules-title">Правила игры</h2>
<p class="welcome__text">Правила просты:</p>
<ul class="welcome__rules-list">
  <li>За ${state.time / (60 * 1000)} ${inclineNouns(state.time / (60 * 1000), [`минута`, `минуты`, `минут`])} нужно ответить на все вопросы.</li>
  <li>Можно допустить ${state.lives} ${inclineNouns(state.lives, [`ошибка`, `ошибки`, `ошибок`])}.</li>
</ul>
<p class="welcome__text">Удачи!</p>
</section>`;

const welcomeScreen = () => {

  // Получаем HTML-элемент
  const screen = renderElement(welcomeTemplate(initialState));

  // Кнопка перехода к экрану игры по жанрам
  const playButton = screen.querySelector(`.welcome__button`);

  // Listener на кнопку Play
  playButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    renderScreen(genreScreen());
  });

  return screen;
};

export default welcomeScreen;
