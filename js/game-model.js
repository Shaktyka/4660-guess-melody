import {INITIAL_STATE} from './data';
import {LEVELS} from './levels';
import {changeLives, changeLevel, changeTime} from './game';

const getLevel = (state) => LEVELS[state.level];
// const getTypeGame = (state) => LEVELS[state.level].type;
const statistics = [4, 5, 8, 10, 11];

export default class GameModel {
  constructor() {
    this.restart();
    this._answers = [];
  }

  // Возвращает состояние
  get state() {
    return this._state;
  }

  // Рестарт игры
  restart() {
    this._state = INITIAL_STATE;
    // Сбросываем массив ответов игрока:
    // if (this._state.answers.length > 0) {
    //   this._state.answers.length = 0;
    // }
  }

  // Изменяет уровень на 1
  nextLevel() {
    // this._state = Object.assign({}, this._state, {level: this._state.level + 1});
    this._state = changeLevel(this._state, this._state.level + 1);
  }
  
  // Возвращает текущий уровень
  curentLevel() {
    return getLevel(this._state);
  }

  // Проверяет, явл-ся ли уровень игрой на выбор жанра
  isGameGenre() {
    return this.curentLevel().type === `game--genre`;
  }

  // Проверяет, явл-ся ли уровень игрой на выбор артиста
  isGameArtist() {
    return this.curentLevel().type === `game--artist`;
  }

  getAnswerGenre() {
    return LEVELS[this._state.level].answers;
  }

  getAnswerArtist() {
    return LEVELS[this._state.level].task.artist;
  }

  // Добавляет ответ игрока в массив ответов
  answer(isCorrect, time) {
    this._answers.push({answer: isCorrect, bonusTime: time});
  }
  
  // Проверяет правильность ответа
  correctAnswer() {
    const task = this.curentLevel().task;
    return (this.isGameArtist()) ? task.image : task.src;
  }

  // addAnswer(result) {
  //   this._state.userAnswersInfo.push({
  //     option: result,
  //     time: INITIAL_STATE.time - this._state.time
  //   });
  // }

  // Уменьшение жизней
  decreaseLives() {
    this._state.lives = changeLives(this._state.lives);
  }

  tick() {
    // this._state = Object.assign({}, this._state, {time: this._state.time - 1000});
    this._state = changeTime(this._state, this._state.time - 1000);
  }

  // Проверяет, есть ли ещё время
  isTime() {
    return this._state.time > 0;
  }
  
  // Уменьшает кол-во жизней в state
  die(isDie) {
    if (isDie) {
      this._state = changeLives(this._state, this._state.lives - 1);
    }
  }

  // Проверяем наличие жизней
  isDead() {
    return this._state.lives <= 0;
  }

  get result() {}
}
