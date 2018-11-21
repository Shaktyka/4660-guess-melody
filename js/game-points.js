// Подсчёт набранных игроком баллов
// Функция на вход принимает массив ответов пользователя;
// Функция на вход принимает кол-во оставшихся нот;
// Функция на выходе отдаёт кол-во набранных очков;
// Массив ответов должен хранить в себе данные об ответах пользователя на каждый вопрос по порядку — информацию об успешном или неуспешном ответе и времени, затраченном на ответ.
// За правильный ответ 1 балл;
// За быстрый правильный ответ (менее 30 секунд) — 2 балла;
// За каждую ошибку вычитается 2 балла.

const countPoints = (results) => {
  let points = 0;
  const resultsLength = results.length;
  // let seconds = []; // массив для секунд каждой попытки

  if (resultsLength < 10) {
    points = -1;
    return points;
  }

  // Извлекаем секунды в массив
  // results.map((item) => {
  // seconds.push(item[1]);
  // });

  let balls = 0;
  results.forEach((item) => {
    balls = 1;
    if (item[1] < 30) {
      balls = 2;
    }
    points += balls;
  });
  // console.log(points);

  return points;
};

// countPoints([[true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20], [true, 10], [true, 20]], 3);

export default countPoints;
