import {initialState} from './data';

// Окружность
const getCircumference = (radius) => Math.round(2 * Math.PI * radius);

// @timeRatio - соотношение оставшегося времени к полному (будет получаться число от 0 до 1)
// @radius - радиус окружности
export const getRadius = (timeRatio, radius) => {
  const dash = {};

  dash.stroke = getCircumference(radius);
  dash.offset = getCircumference(radius) - getCircumference(radius) * timeRatio;

  return dash;
};

// Вычисление значений для stroke-dasharray и stroke-dashoffset
export const getDash = (time) => {
  const RADIUS = 370;
  // Окружность
  const timerLine = document.querySelector(`.timer__line`);

  // Время поправим при выполнении задания со временем
  const initTime = initialState.time / 1000;

  const timeRatio = time / initTime;
  const dashState = getRadius(timeRatio, RADIUS);

  timerLine.setAtribute(`stroke-dasharray`, dashState.stroke);
  timerLine.setAtribute(`stroke-dashoffset`, dashState.offset);
};
