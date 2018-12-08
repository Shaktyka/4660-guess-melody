export const playClass = {
  PLAY: `track__button--play`,
  PAUSE: `track__button--pause`
};

export const managePlayTrack = (playButtons, tracks, clickedElement) => {

  // Проверим кнопки на класс pause, если есть - уберём
  playButtons.forEach((item) => {
    if (item.classList.contains(playClass.PAUSE)) {
      item.classList.remove(playClass.PAUSE);
      item.classList.add(playClass.PLAY);
    }
  });

  // На нажатой кнопке сменим класс
  if (clickedElement.classList.contains(playClass.PAUSE)) {
    clickedElement.classList.remove(playClass.PAUSE);
    clickedElement.classList.add(playClass.PLAY);
  } else {
    clickedElement.classList.remove(playClass.PLAY);
    clickedElement.classList.add(playClass.PAUSE);
  }

  // Находим аудиотрек по value нажатой кнопки
  // const buttonValue = clickedElement.value;
  // const audioTrack = tracks[buttonValue];

  // Отключаем проигрывающиеся треки
  // tracks.forEach((track) => {
  // track.pause();
  // });

  // Включаем нужный трек
  // audioTrack.play();
};
