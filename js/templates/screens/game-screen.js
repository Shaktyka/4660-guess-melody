import {renderElement} from '../utils.js';
import header from './header.js';
import genreScreen from './genre-screen.js';
import artistScreen from './artist-screen.js';
import {levels} from '../data';


const gameScreen = (level) => `<section class="game ${level.type}">
    <section class="game__screen">
      <h2 class="game__title">${level.title}</h2>

    </section>
  </section>`;

const getGameScreen = (state) => {
  // Текущий уровень (из массива levels по номеру из initialState)
  const currentLevel = levels[state.level]; // 1й элемент массива уровней

  // Рендерим игровой экран
  const element = renderElement(gameScreen(currentLevel));

  // const outerFrame = document.querySelector(`.game`);
  const innerFrame = element.querySelector(`.game__screen`);


  // Контент экрана в зависимости от типа игры
  const content = (currentLevel.type === `game--artist`) ? artistScreen(state) : genreScreen(state);

  element.insertAdjacentElement(`afterbegin`, header(state));
  innerFrame.appendChild(content);

  return element;
};

export default getGameScreen;
