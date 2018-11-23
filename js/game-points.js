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

// Кол-во очков
const Points = {
  FAST: 2,
  SLOW: 1,
  WRONG: -2
};

// ФУНКЦИЯ
const countPoints = (results) => {
  let score = Score.INIT;

  // Проверка на тип данных
  if (!Array.isArray(results)) {
    throw new Error(`Некорректный тип данных`);
  }

  // Если ответов < 10, то => -1
  if (results.length < MAX_ANSWERS) {
    return Score.FAIL;
  }

  // НАЧИСЛЯЕМ ОЧКИ за ответы
  results.forEach((item) => {
    if (!item.answer) { // Если ответ неправильный
      score += Points.WRONG;
    } else { // Если ответ правильный
      if (item.time < TRY_TIME) {
        score += Points.FAST;
      } else {
        score += Points.SLOW;
      }
    }
  });

  return score;
};

export default countPoints;
