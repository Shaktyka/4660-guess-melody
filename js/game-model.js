import {INITIAL_STATE} from './data';
// import {LEVELS} from './levels';
import {changeLives} from './game';

// const getLevel = (state) => LEVELS[state.level];
// const statistics = [4, 5, 8, 10, 11];

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  nextLevel() {
    this._state = Object.assign({}, this._state, {level: this._state.level + 1});
  }

  isOutOfLives() {
    return this._state.lives <= 0;
  }

  decreaseLives() {
    this._state.lives = changeLives(this._state.lives);
  }

  tick() {
    this._state = Object.assign({}, this._state, {time: this._state.time - 1000});
  }

  restart() {
    this._state = INITIAL_STATE;
  }
}
