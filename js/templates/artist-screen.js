// Экран выбора исполнителя
import {renderElement, renderScreen, getRandom} from '../utils.js';
import successScreen from './success-screen.js';
import failTriesScreen from './fail-tries-screen.js';
// import header from './header.js';
// import {initialState} from '../data';
import {levels} from '../data';

const artistTemplate = (level) => `<div><div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${level.task.src}" autoplay></audio>
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

  // Генерим экран с данными текущего уровня
  const currentLevel = levels[state.level];
  const artistElement = renderElement(artistTemplate(currentLevel));

  // Форма
  const artistForm = artistElement.querySelector(`.game__artist`);

  // Обработчик кликов по элементам формы
  const artistFormClickHandler = (evt) => {
    let clickedElement = evt.target;
    if (clickedElement.classList.contains(`artist__input`)) {
      return (getRandom()) ? renderScreen(successScreen()) : renderScreen(failTriesScreen());
    }
    return false;
  };

  // Вешаем listener на форму
  artistForm.addEventListener(`click`, artistFormClickHandler);

  return artistElement;
};

export default artistScreen;
