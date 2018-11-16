// Отрисовка экрана по переданному номеру
const renderScreenContent = (index) => {
  currIndex = index;
  let screenElement = screenArray[index].cloneNode(true);
  mainSection.innerHTML = ``;
  mainSection.appendChild(screenElement);
};
