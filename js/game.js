export const GAME_INIT = Object.freeze({
  level: 0,
  lives: 3,
  time: 300,
  maxLevel: 10
});

// let currentLevel = GAME_INIT.level;

// Изменение уровня
export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Уровень должен быть числом`);
  }

  if (level < 0) {
    throw new Error(`Уровень не может быть отрицательным числом`);
  }

  if (level > game.maxLevel) {
    throw new Error(`Значение уровня не может быть больше максимального`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

// Изменение количества жизней/попыток
export const changeLives = (game, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Количество жизней должно быть числом`);
  }

  if (lives < 0) {
    throw new Error(`Количество жизней не может быть отрицательным`);
  }

  if (lives > game.lives) {
    throw new Error(`Количество жизней не может быть больше максимального`);
  }

  const newGame = Object.assign({}, game, {
    lives
  });
  return newGame;
};

// Изменение времени
export const changeTime = (game, time) => {
  if (typeof time !== `number`) {
    throw new Error(`Количество времени должно быть числом`);
  }

  if (time < 0) {
    throw new Error(`Количество времени не может быть отрицательным`);
  }

  if (time > game.time) {
    throw new Error(`Количество времени не может быть больше максимального`);
  }

  const newGame = Object.assign({}, game, {
    time
  });
  return newGame;
};
