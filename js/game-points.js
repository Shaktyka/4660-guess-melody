// Подсчёт набранных игроком баллов
// Функция на вход принимает массив ответов пользователя;
// Функция на вход принимает кол-во оставшихся нот;
// Функция на выходе отдаёт кол-во набранных очков;
// Массив ответов должен хранить в себе данные об ответах пользователя на каждый вопрос по порядку — информацию об успешном или неуспешном ответе и времени, затраченном на ответ.

const TRY_TIME = 30;
const MAX_ANSWERS = 10;

const Score = {
  INIT: 0,
  FAIL: -1
};

// ФУНКЦИЯ
const countPoints = (results) => {
  let score = Score.INIT;
  const resultsLength = results.length;

  // Кол-во очков
  const Points = {
    FAST: 2,
    SLOW: 1,
    WRONG: -2
  };

  // Если ответов < 10, то => -1
  if (resultsLength < MAX_ANSWERS) {
    score = Score.FAIL;
    return score;
  }

  // НАЧИСЛЯЕМ ОЧКИ за ответы
  results.forEach((item) => {
    if (!item[0]) { // Если ответ неправильный
      score += Points.WRONG;
    } else { // Если ответ правильный
      if (item[1] < TRY_TIME) {
        score += Points.FAST;
      } else {
        score += Points.SLOW;
      }
    }
  });

  return score;
};

// countPoints([[true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20]], 3);

export default countPoints;
