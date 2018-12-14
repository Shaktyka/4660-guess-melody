import AbstractView from './abstract-view.js';
import {LEVELS} from '../data';

export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.level = LEVELS[state.level];
  }

  get template() {
    return `<section class="game ${this.level.type}">
    <section class="game__screen">
      <h2 class="game__title">${this.level.title}</h2>

    </section>
  </section>`;
  }
}
