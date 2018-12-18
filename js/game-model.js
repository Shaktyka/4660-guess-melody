import {INITIAL_STATE} from './data';
import {LEVELS} from './levels';
import {changeLives} from './game';

const getLevel = (state) => LEVELS[state.level]; // получаем номер уровня
const getTypeGame = (state) => LEVELS[state.level].type; // получаем тип уровня
// const statistics = [4, 5, 8, 10, 11];

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  isGameGenre() {
    return getTypeGame(this._state) === `game--genre`;
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
    // Сбросываем массив ответов игрока:
    if (this._state.answers.length > 0) {
      this._state.answers.length = 0;
    }
  }
}
