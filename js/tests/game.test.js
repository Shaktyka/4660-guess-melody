import {assert} from 'chai';
import {GAME_INIT, changeLevel, changeLives, changeTime} from '../game.js';


describe(`Изменение уровня игрока`, () => {

  it(`Уровень должен изменяться`, () => {
    assert.equal(changeLevel(GAME_INIT, 1).level, 1);
    assert.equal(changeLevel(GAME_INIT, 2).level, 2);
    assert.equal(changeLevel(GAME_INIT, 10).level, 10);
    // assert.equal(changeLevel(GAME_INIT, 102).level, 102);
  });

  it(`Нельзя установить отрицательный уровень`, () => {
    assert.throws(() => changeLevel(GAME_INIT, -1).level, /Уровень не может быть отрицательным числом/);
  });

  it(`Нельзя установить уровень больше максимального`, () => {
    assert.throws(() => changeLevel(GAME_INIT, 11).level, /Значение уровня не может быть больше максимального/);
  });

  it(`Проверка на получение некорректного типа данных`, () => {
    assert.throws(() => changeLevel(GAME_INIT, []).level, /Уровень должен быть числом/);
  });

});


describe(`Изменение количества жизней`, () => {

  it(`Количество жизней должно изменяться`, () => {
    assert.equal(changeLives(GAME_INIT, 3).lives, 3);
    assert.equal(changeLives(GAME_INIT, 2).lives, 2);
    assert.equal(changeLives(GAME_INIT, 1).lives, 1);
    assert.equal(changeLives(GAME_INIT, 0).lives, 0);
  });

  it(`Количество жизней должно быть числом`, () => {
    assert.throws(() => changeLives(GAME_INIT, {}).lives, /Количество жизней должно быть числом/);
  });

  it(`Количество жизней не может быть отрицательным`, () => {
    assert.throws(() => changeLives(GAME_INIT, -1).lives, /Количество жизней не может быть отрицательным/);
  });

  it(`Количество жизней не может быть больше максимального`, () => {
    assert.throws(() => changeLives(GAME_INIT, 4).lives, /Количество жизней не может быть больше максимального/);
  });
});

// Время должно быть числом
// Время не может быть отрицательным
// Время не может быть больше, чем 300
describe(`Изменение времени`, () => {

  it(`Количество времени должно изменяться`, () => {
    assert.equal(changeTime(GAME_INIT, 300).time, 300);
    assert.equal(changeTime(GAME_INIT, 100).time, 100);
    assert.equal(changeTime(GAME_INIT, 0).time, 0);
  });

  it(`Количество времени должно быть числом`, () => {
    assert.throws(() => changeTime(GAME_INIT, `30`).time, /Количество времени должно быть числом/);
    assert.throws(() => changeTime(GAME_INIT, []).time, /Количество времени должно быть числом/);
  });

  it(`Количество времени не может быть отрицательным`, () => {
    assert.throws(() => changeTime(GAME_INIT, -1).time, /Количество времени не может быть отрицательным/);
  });

  it(`Количество времени не может быть больше максимального`, () => {
    assert.throws(() => changeTime(GAME_INIT, 301).time, /Количество времени не может быть больше максимального/);
  });

});
