export const playClass = {
  PLAY: `track__button--play`,
  PAUSE: `track__button--pause`
};

// Переключение треков
export const switchTrack = (newTrack, currentTrack) => {
  //console.log(newTrack, currentTrack);

  if (currentTrack !== newTrack) {
    currentTrack.pause();
    currentTrack = newTrack;
    currentTrack.play();
  } else {
    currentTrack.pause();
  }
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
