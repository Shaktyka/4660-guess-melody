export const GAME_INIT = Object.freeze({
  level: 0,
  lives: 3,
  time: 300,
  levelsMax: 10
});

// let currentLevel = GAME_INIT.level;

// Изменение уровня
export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

// Изменение количества жизней/попыток
//  const changeLives = (lives) => {
//
//  return lives;
//  };

// Изменение времени
//  const changeTime = (time) => {
//
//  return time;
//  };

// Время должно быть числом
// Время не может быть отрицательным
// Время не может быть больше, чем 300
