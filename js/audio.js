export const playClass = {
  PLAY: `track__button--play`,
  PAUSE: `track__button--pause`
};

export const initAutoplay = (track, button) => {
  if (!track.autoplay) {
    track.autoplay = `autoplay`;
    button.classList.remove(playClass.PLAY);
    button.classList.add(playClass.PAUSE);
  }
};

export const initPlayListeners = (playButtons, tracks) => {
  const addPlayListeners = (buttons, tracks) => {
    buttons.forEach((button, index) => {
      button.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        if (evt.target.classList.contains(playClass.PLAY)) {
          evt.target.classList.remove(playClass.PLAY);
          evt.target.classList.add(playClass.PAUSE);
          tracks[index].play();
        } else {
          evt.target.classList.add(playClass.PLAY);
          evt.target.classList.remove(playClass.PAUSE);
          tracks[index].pause();
        }
      });
    });
  };
  addPlayListeners(playButtons, tracks);
};

// Переключение состояния кнопки Play
export const switchPlayState = (playButtons, tracks, clickedElement, clickedPlay) => {
  // Проверим кнопки на класс pause, если есть - уберём
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
