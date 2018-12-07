// const RADIUS = 370;

// Обводка
// const TIMER = document.querySelector(`.timer__line`);

// Радиус окружности
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

/*
у окружности с истечением времени постепенно уменьшается длина обводки
блок .timer, в котором находится элемент .timer-line
нужно доработать этот блок так, чтобы он показывал оставшееся время
подобрать правильные значения stroke-dasharray и stroke-dashoffset
Чтобы у блока появилась обводка, нужно добавить ему атрибут stroke-dasharray
Нужно увеличивать со временем значение атрибута stroke-dashoffset на некий фиксированный шаг
Значение stroke-dasharray, которое должно быть равным полной длине окружности, изменять не нужно
Чтобы посчитать длину расстояния между штрихами, нужно полную длину окружности поделить на число шагов, за которые проходит анимация.
метод будет рассчитывать длину штриха и длину расстояния между штрихами
*/
