import {assert} from 'chai';
import countPoints from './game-points.js';


describe(`Подсчёт набранных баллов игрока`, () => {

  it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(-1, countPoints([[true, 10]]));
  });

  it(`На все вопросы ответил правильно, но не быстро, то => 10 баллов`, () => {
    assert.equal(10, countPoints([[true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31]]));
  });

  it(`За быстрый правильный ответ начисляется по 2 балла`, () => {
    assert.equal(20, countPoints([[true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20]]));
  });

  it(`Сумма баллов при смеси правильных быстрых и небыстрых ответов вычисляется корректно`, () => {
    assert.equal(15, countPoints([[true, 10], [true, 40], [true, 10], [true, 40], [true, 10], [true, 30], [true, 10], [true, 30], [true, 10], [true, 30]]));
  });

  it(`Неправильные ответы корректно обрабатываются`, () => {
    // Все ответы неправильные
    assert.equal(-20, countPoints([[false, 31], [false, 31], [false, 31], [false, 31], [false, 31], [false, 31], [false, 31], [false, 31], [false, 31], [false, 31]]));
    // Неправильных ответов - половина
    assert.equal(-5, countPoints([[false, 31], [true, 31], [false, 31], [true, 31], [false, 31], [true, 31], [false, 31], [true, 31], [false, 31], [true, 31]]));
    // Неправильных ответов меньше половины
    assert.equal(4, countPoints([[false, 31], [true, 31], [false, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31]]));
  });

});
