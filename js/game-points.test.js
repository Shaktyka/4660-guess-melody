import {assert} from 'chai';
import countPoints from './game-points.js';


describe(`Подсчёт набранных баллов игрока`, () => {

  it(`Игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(-1, countPoints([[true, 10]]));
  });
  // а если > чем 10 ответов?

  it(`На все вопросы ответил правильно, но не быстро, то => 10 баллов`, () => {
    assert.equal(10, countPoints([[true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31], [true, 31]]));
  });

  it(`За быстрый правильный ответ начисляется по 2 балла`, () => {
    assert.equal(20, countPoints([[true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20]]));
  });

  it(`Сумма баллов при смеси быстрых и небыстрых ответов вычисляется корректно`, () => {
    assert.equal(15, countPoints([[true, 10], [true, 40], [true, 10], [true, 40], [true, 10], [true, 30], [true, 10], [true, 30], [true, 10], [true, 30]]));
  });

});
