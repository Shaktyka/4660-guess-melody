// Склонение существительных
const inclineNouns = (number, nouns) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return nouns[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export default inclineNouns;
