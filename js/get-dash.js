import {INITIAL_STATE} from './data';

const getCircumference = (radius) => Math.round(2 * Math.PI * radius);

export const getRadius = (timeRatio, radius) => {
  const dash = {};

  dash.stroke = getCircumference(radius);
  dash.offset = getCircumference(radius) - getCircumference(radius) * timeRatio;

  return dash;
};

// Вычисление значений для stroke-dasharray и stroke-dashoffset
export const getDash = (time) => {
  const RADIUS = 370;

  const initTime = INITIAL_STATE.time / 1000;

  const timeRatio = time / initTime;
  return getRadius(timeRatio, RADIUS);
};
