// Отрисовка экрана по переданному элементу
const renderScreenContent = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};
export default renderScreenContent;
