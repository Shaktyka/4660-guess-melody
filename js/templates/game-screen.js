import {renderElement, renderScreen} from '../utils.js';
import header from './header.js';
import {initialState} from '../data';
import {levels} from '../data';

const gameFrameTemplate = ({level}) => `<section class="game ${level[level].type}">
    <section class="game__screen">
      <h2 class="game__title">${level[level].title}</h2>

    </section>
  </section>`;

const gameScreen = (state) => {

  // Рендерим элемент
  const gameFrame = renderElement(gameFrameTemplate);

  // Внешний section
  const outerFrame = element.querySelector(`.game`);

  // Внутренний section
  const innerScreen = screen.querySelector(`.game__screen`);
  
  // Какая-то магия, нужно собирать и отрисовывать игровые экраы

  return gameFrameElement;

};

export default gameScreen;
