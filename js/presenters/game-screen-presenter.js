import GameScreenView from '../views/game-screen-view.js';
import HeaderView from '../views/header-view.js';
import GenreView from '../views/genre-view.js';
import ArtistView from '../views/artist-view.js';
import {ONE_SECOND} from '../utils';
import Application from '../application';
// import {LEVELS} from '../levels';
// const currentLevel = LEVELS[state.level];

export default class GameScreenPresenter {
  constructor(model) {
  	this.model = model;

  	this.view = new GameScreenView(this.model.state);
    this.header = new HeaderView(this.model.state);
    this.content = (this.model.isGameGenre()) ? new GenreView(this.model.state) : new AtistView(this.model.state);

    this.view.element.insertAdjacentElement(`afterbegin`, this.header.element);
    this.view.element.querySelector(`.game__screen`).appendChild(this.content.element);

    this._timer = null;
    // this.onStartButton();
  }

  get element() {
    return this.view.element;
  }

}
