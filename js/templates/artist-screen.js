// Экран выбора исполнителя
import {renderElement} from '../utils.js';
import {levels} from '../data';
import changeScreen from '../change-screen.js';
import {changeLives} from '../game.js';
import {playClass, initAutoplay} from '../audio.js';

const artistTemplate = (level) => `<div><div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${level.task.src}"></audio>
      </div>
      <form class="game__artist">
        ${level.answers.map((answer, i) => `<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
            ${answer.artist}
          </label>
        </div>`).join(``)}
      </form></div>`;

const artistScreen = (state) => {

  // Текущий уровень
  const currentLevel = levels[state.level];

  // Рендерим экран
  const artistElement = renderElement(artistTemplate(currentLevel));

  // Меняем вид кнопки Play
  initAutoplay(artistElement.querySelector(`audio`), artistElement.querySelector(`.track__button--play`));

  // Массив элементов артистов
  const artists = artistElement.querySelectorAll(`.artist`);

  // Обрабатываем клик
  artists.forEach((artist) => {
    artist.addEventListener(`click`, () => {
      if (artist.querySelector(`img`).src === currentLevel.task.image) {
        state.answers.push({answer: true, time: 30});
        changeScreen(state);
      } else {
        state.answers.push({answer: false, time: 30});
        changeScreen(changeLives(state, state.lives - 1));
      }
    });
  });

  return artistElement;
};

export default artistScreen;
