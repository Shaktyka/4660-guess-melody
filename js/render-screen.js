// Отрисовка экрана по переданному элементу
const mainSection = document.querySelector(`.main`);

const renderScreenContent = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

export default renderScreenContent;
