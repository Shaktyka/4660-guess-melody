import {assert} from 'chai';
import countPoints from './game-points.js';

// Ответов меньше, чем 10
const results1 = [
  {answer: true, time: 10},
  {answer: false, time: 20},
  {answer: true, time: 30}
];

// Все ответы правильные, но не быстро
const results2 = [
  {answer: true, time: 31},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 40},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 35},
  {answer: true, time: 35},
  {answer: true, time: 35},
  {answer: true, time: 50}
];

// Все ответы правильные и быстрые
const results3 = [
  {answer: true, time: 10},
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 20},
  {answer: true, time: 10},
  {answer: true, time: 20}
];

// Смесь правильных быстрых и небыстрых ответов
const results4 = [
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20}
];

// 1 неправильный ответ
const results5 = [
  {answer: false, time: 10},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20},
  {answer: true, time: 40},
  {answer: true, time: 20}
];

// 2 неправильных ответа
const results6 = [
  {answer: true, time: 31},
  {answer: false, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: false, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31}
];

// 3 неправильных ответа
const results7 = [
  {answer: true, time: 31},
  {answer: false, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: false, time: 31},
  {answer: true, time: 31},
  {answer: true, time: 31},
  {answer: false, time: 31}
];

describe(`Подсчёт набранных баллов игрока`, () => {

  it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(-1, countPoints(results1, 1));
  });

  it(`На все вопросы ответил правильно, но не быстро = 10 баллов`, () => {
    assert.equal(10, countPoints(results2, 3));
  });

  it(`За быстрый правильный ответ начисляется по 2 балла`, () => {
    assert.equal(20, countPoints(results3, 3));
  });

  it(`Баллы при правильных быстрых и небыстрых ответах вычисляются корректно`, () => {
    assert.equal(15, countPoints(results4, 3));
  });

  it(`Неправильные ответы корректно обрабатываются`, () => {
    assert.equal(12, countPoints(results5, 1));
    assert.equal(4, countPoints(results6, 2));
  });

  it(`При количестве нот = 0, возвращается -1 (поражение)`, () => {
    assert.equal(-1, countPoints(results7, 0));
  });

  it(`Обработка некорректного типа данных массива ответов`, () => {
    assert.throws(() => countPoints({}, 1), /Некорректный тип данных/);
    assert.throws(() => countPoints(``, 2), /Некорректный тип данных/);
    assert.throws(() => countPoints(null, 1), /Некорректный тип данных/);
    assert.throws(() => countPoints(undefined, 2), /Некорректный тип данных/);
  });

  it(`Обработка некорректного типа данных количества нот`, () => {
    assert.throws(() => countPoints(results6, []), /Некорректный тип данных количества нот/);
    assert.throws(() => countPoints(results6, {}), /Некорректный тип данных количества нот/);
    assert.throws(() => countPoints(results6, `2`), /Некорректный тип данных количества нот/);
  });

});
