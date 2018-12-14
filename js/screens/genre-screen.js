import GenreView from '../views/genre-view.js';
import changeScreen from '../change-screen.js';
import {changeLives} from '../game.js';

const genreScreen = (state) => {
  const screen = new GenreView(state);

  screen.onAnswer = (rightAnswer, userAnswers) => {
    if (rightAnswer === userAnswers.join(`,`)) {
      state.answers.push({answer: true, time: 30});
      changeScreen(state);
    } else {
      state.answers.push({answer: false, time: 30});
      changeScreen(changeLives(state, state.lives - 1));
    }
  };
  return screen;
};

export default genreScreen;
