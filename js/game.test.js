import {assert} from 'chai';
import {GAME_INIT, changeLevel} from './game.js';

// Уровень - это только число
// Не м/б отрицательным
// Не может быть больше какого-то максимального значения

describe(`Изменение уровня игрока`, () => {

  it(`Уровень должен изменяться`, () => {
    assert.equal(changeLevel(GAME_INIT, 1).level, 1);
    assert.equal(changeLevel(GAME_INIT, 2).level, 2);
    assert.equal(changeLevel(GAME_INIT, 10).level, 10);
    assert.equal(changeLevel(GAME_INIT, 102).level, 102);
  });

  it(`Нельзя установить отрицательный уровень`, () => {
    assert.throws(() => changeLevel(GAME_INIT, -1).level, /Level should not be negative value/);
  });

  it(`Проверка на некорректные данные`, () => {
    assert.throws(() => changeLevel(GAME_INIT, []).level, /Level should be of type number/);
  });

});
