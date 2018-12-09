// import {initialState} from './data';

// Окружность
const getCircumference = (radius) => Math.round(2 * Math.PI * radius);

/*
@timeRatio - соотношение оставшегося времени к полному (должно получаться число от 0 до 1)
@radius - радиус окружности
*/
export const getRadius = (timeRatio, radius) => {
  const dash = {};

  dash.stroke = getCircumference(radius);
  dash.offset = getCircumference(radius) - getCircumference(radius) * timeRatio;

  return dash;
};

export const getDash = (time) => {
  const RADIUS = 370;
  // Окружность
  const timerLine = document.querySelector(`.timer__line`);

  // const initTime = initialState.time / 1000; // с временем непонятно пока что делать

  const timeRatio = time / 300; // 300 временно
  const dashState = getRadius(timeRatio, RADIUS);

  timerLine.setAtribute(`stroke-dasharray`, dashState.stroke);
  timerLine.setAtribute(`stroke-dashoffset`, dashState.offset);
};
