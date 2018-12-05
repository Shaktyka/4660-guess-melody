// Сообщения о результатах
export const FailText = {
  END_TIME_TITLE: `Увы и ах!`,
  END_TIME_TEXT: `Время вышло! Вы не успели отгадать все мелодии`,
  END_TRIES_TITLE: `Какая жалость!`,
  END_TRIES_TEXT: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
};

// Поражение
export const getDefeat = (time) => {
  return (time === 0) ? FailText.END_TIME_TEXT : FailText.END_TRIES_TEXT;
};

// Победа
export const getVictory = (allResults, points) => {
  const results = allResults.slice();
  results.push(points);
  results.sort((a, b) => b - a);

  const index = results.indexOf(points);
  const resultsLength = results.length;
  const rest = (resultsLength - (index + 1)) / resultsLength * 100;

  const result = `Вы заняли ${index + 1} место из ${resultsLength} игроков. Это лучше, чем у ${rest}% игроков`;

  return result;
};

// Вывод результатов
export const gameResults = (playersResults, currentResult) => {
  // Проверяем входящие данные
  if (!Array.isArray(playersResults)) {
    throw new Error(`Некорректный тип данных playersResults`);
  }

  if (typeof currentResult !== `object`) {
    throw new Error(`Некорректный тип данных currentResult`);
  }

  return (currentResult.points > 0 && currentResult.time > 0) ? getVictory(playersResults, currentResult.points) : getDefeat(currentResult.time);
};
