import ArtistView from '../views/artist-view.js';
import {initAutoplay, addArtistListener} from '../audio/audio.js';
import {INITIAL_STATE} from '../data';
import changeScreen from '../change-screen.js';
import {changeLives} from '../game.js';

const artistScreen = (state) => {
  const screen = new ArtistView(state);

  screen.onAnswer = (item, answer) => {
    if (item.querySelector(`img`).src === answer) {
      state.answers.push({answer: true, time: 30});
      changeScreen(state);
    } else {
      state.answers.push({answer: false, time: 30});
      changeScreen(changeLives(state, state.lives - 1));
    }
  };
  return screen;
};

export default artistScreen;
