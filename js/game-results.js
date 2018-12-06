// Сообщения о результатах
export const FailText = {
  END_TIME: `Время вышло! Вы не успели отгадать все мелодии`,
  END_TRIES: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
};

// Поражение
export const getDefeat = (time) => {
  return (time === 0) ? FailText.END_TIME : FailText.END_TRIES;
};

// Победа
export const getVictory = (allResults, points) => {
  const results = allResults.slice();
  results.push(points);
  results.sort((a, b) => b - a);

  const index = results.indexOf(points);
  const resultsLength = results.length;
  let rest = (resultsLength - (index + 1)) / resultsLength * 100;
  rest = +rest.toFixed(0);

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
