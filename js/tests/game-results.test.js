import {assert} from 'chai';
import {FailText, gameResults} from '../game-results.js';
// getDefeat, getVictory,

// Результаты игры
const statistics = [4, 5, 8, 10];
const statistics1 = [4, 5, 10, 11];
const statistics2 = [5, 8, 10, 11];

// Быстрый результат без потери нот
const result = {
  points: 20,
  lives: 3,
  time: 100
};

// 3 место
const result1 = {
  points: 8,
  lives: 3,
  time: 100
};

// 5 место
const result2 = {
  points: 4,
  lives: 1,
  time: 100
};

// Поражение (0 попыток)
const result3 = {
  points: -1,
  lives: 0,
  time: 100
};

// Поражение (0 времени)
const result4 = {
  points: 18,
  lives: 2,
  time: 0
};


describe(`Вывод результатов игры`, () => {

  it(`Победа: 1 место`, () => {
    assert.equal(`Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`, gameResults(statistics, result));
  });

  it(`Победа: 3 место`, () => {
    assert.equal(`Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков`, gameResults(statistics1, result1));
  });

  it(`Победа: 5 место`, () => {
    assert.equal(`Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`, gameResults(statistics2, result2));
  });

  it(`Поражение: кончились попытки`, () => {
    assert.equal(FailText.END_TRIES, gameResults(statistics, result3));
  });

  it(`Поражение: кончилось время`, () => {
    assert.equal(FailText.END_TIME, gameResults(statistics, result4));
  });

  it(`Получены параметры некорректного типа`, () => {
    assert.throws(() => gameResults({}, result), /Некорректный тип данных playersResults/);
    assert.throws(() => gameResults(``, result), /Некорректный тип данных playersResults/);
    assert.throws(() => gameResults(null, result), /Некорректный тип данных playersResults/);
    assert.throws(() => gameResults(undefined, result), /Некорректный тип данных playersResults/);
  });

});
