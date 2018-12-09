export const playClass = {
  PLAY: `track__button--play`,
  PAUSE: `track__button--pause`
};

// Добавление autoplay и состояния play первой кнопке и треку
export const initAutoplay = (track, button) => {
  if (!track.autoplay) {
    track.autoplay = `autoplay`;
    button.classList.remove(playClass.PLAY);
    button.classList.add(playClass.PAUSE);
  }
};

// Listener для кнопки Play на экране выбора артиста
export const addArtistListener = (button, track) => {
  button.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (button.classList.contains(playClass.PLAY)) {
      button.classList.remove(playClass.PLAY);
      button.classList.add(playClass.PAUSE);
      track.play();
    } else {
      button.classList.add(playClass.PLAY);
      button.classList.remove(playClass.PAUSE);
      track.pause();
    }
  });
};

// Добавление обработчиков для кнопок Play на экране выбора жанра
export const initPlayListeners = (playButtons, audios) => {
  const addPlayListeners = (buttons, tracks) => {
    buttons.forEach((button, index) => {
      button.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        buttons.forEach((btn, idx) => {
          if (btn.classList.contains(playClass.PAUSE)) {
            btn.classList.add(playClass.PLAY);
            btn.classList.remove(playClass.PAUSE);
            tracks[idx].pause();
          }
        });
        evt.target.classList.remove(playClass.PLAY);
        evt.target.classList.add(playClass.PAUSE);
        tracks[index].play();
      });
    });
  };
  addPlayListeners(playButtons, audios);
};

// Переключение состояния кнопки Play
export const switchPlayState = (playButtons, tracks, clickedElement, clickedPlay) => {
  playButtons.forEach((item) => {
    if (item.classList.contains(playClass.PAUSE)) {
      item.classList.remove(playClass.PAUSE);
      item.classList.add(playClass.PLAY);
    }
  });

  if (clickedElement !== clickedPlay) {
    clickedElement.classList.remove(playClass.PLAY);
    clickedElement.classList.add(playClass.PAUSE);
    clickedPlay = clickedElement;
  } else {
    clickedElement.classList.remove(playClass.PAUSE);
    clickedElement.classList.add(playClass.PLAY);
  }
};
