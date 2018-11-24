// Подсчёт набранных игроком баллов
// Функция на вход принимает массив ответов пользователя;
// Функция на вход принимает кол-во оставшихся нот;
// Функция на выходе отдаёт кол-во набранных очков;
// Массив ответов должен хранить в себе данные об ответах пользователя на каждый вопрос по порядку — информацию об успешном или неуспешном ответе и времени, затраченном на ответ.

const TRY_TIME = 30;
const MAX_ANSWERS = 10;

// Результат: начальный и при поражении
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

// Количество нот
const Notes = {
  FAIL: 3
};

// ФУНКЦИЯ
const countPoints = (results, notes) => {
  // Стартовое количество
  let score = Score.INIT;

  // Проверка на тип данных results
  if (!Array.isArray(results)) {
    throw new Error(`Некорректный тип данных`);
  }

  // Проверка на тип данных notes
  if (typeof notes !== `number`) {
    throw new Error(`Некорректный тип данных количества нот`);
  }

  // Если ответов < 10 или нот получено 3, то => -1
  if (results.length < MAX_ANSWERS || notes === Notes.FAIL) {
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
