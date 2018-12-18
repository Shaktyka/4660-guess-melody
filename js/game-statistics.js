import inclineNouns from './incline-nouns.js';
import {timeConverter} from './utils.js';

const MINUTES = [`минуту`, `минуты`, `минут`];
const SECONDS = [`секунду`, `секунды`, `секунд`];
const POINTS = [`балл`, `балла`, `баллов`];
const FAST = [`быстрый`, `быстрых`, `быстрых`];
const FAIL = [`ошибку`, `ошибки`, `ошибок`];

export const getGameStatistics = (result) => {
  const minutes = timeConverter(result.time).minutes;
  const seconds = timeConverter(result.time).seconds;
  const statistics = `За ${minutes} ${inclineNouns(minutes, MINUTES)} и ${seconds} ${inclineNouns(seconds, SECONDS)}
    вы набрали ${result.score} ${inclineNouns(result.score, POINTS)} (${result.fast} ${inclineNouns(result.fast, FAST)}),
    совершив ${result.fail} ${inclineNouns(result.fail, FAIL)}`;
  return statistics;
};
