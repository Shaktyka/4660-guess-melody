import AbstractView from './abstract-view.js';
import {levels} from '../data';

export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.level = levels[state.level];
  }

  get template() {
    return `<section class="game ${this.level.type}">
    <section class="game__screen">
      <h2 class="game__title">${this.level.title}</h2>

    </section>
  </section>`;
  }
}
