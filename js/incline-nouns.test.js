import {assert} from 'chai';
import inclineNouns from './incline-nouns.js';

const nouns = [`минута`, `минуты`, `минут`];

describe(`Склонение числительных`, () => {

  it(`Ед. число, именительный падеж: минута`, () => {
    assert.equal(inclineNouns(1, nouns), `минута`);
    assert.equal(inclineNouns(31, nouns), `минута`);
    assert.equal(inclineNouns(201, nouns), `минута`);
  });

  it(`Ед. число, родительный падеж: минуты`, () => {
    assert.equal(inclineNouns(2, nouns), `минуты`);
    assert.equal(inclineNouns(23, nouns), `минуты`);
    assert.equal(inclineNouns(104, nouns), `минуты`);
  });

  it(`Мн. число, родительный падеж: минут`, () => {
    assert.equal(inclineNouns(5, nouns), `минут`);
    assert.equal(inclineNouns(14, nouns), `минут`);
    assert.equal(inclineNouns(107, nouns), `минут`);
  });

});
