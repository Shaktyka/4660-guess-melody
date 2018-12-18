import AbstractView from './abstract-view.js';
import {LEVELS} from '../levels';
// import genreScreen from '../presenters/genre-presenter.js';
// import artistScreen from '../presenters/artist-presenter.js';

// const content = (currentLevel.type === `game--artist`) ? artistScreen(state).element : genreScreen(state).element;
// screen.element.insertAdjacentElement(`afterbegin`, header(state).element);
// screen.element.querySelector(`.game__screen`).appendChild(content);

export default class GameView extends AbstractView {
  constructor(model) {
    super();
    this.state = model.state;
    this.level = LEVELS[this.state.level];
  }

  get template() {
    return `<section class="game ${this.level.type}">
    <section class="game__screen">
      <h2 class="game__title">${this.level.title}</h2>

    </section>
  </section>`;
  }
}
