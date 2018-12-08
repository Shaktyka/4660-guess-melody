const render = (html) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = html.trim();
  return wrapper;
};

export default class AbstractView {

  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    // возвращает строку, содержащую разметку
    // должен быть переопределён в объектах-наследниках
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    // создаёт DOM-элемент с помощью метода render
    this._element = this.render();
    // добавляет ему обработчики с помощью метода bind
    this.bind(this._element);
    // возвращает DOM-элемент, соответствующий представлению
    return this._element;
  }

  render() {
    // создаёт DOM-элемент на основе шаблона, который возвращается геттером template
    return render(this.template);
  }

  bind() {
    // добавляет обработчики событий
    // по умолчанию ничего не делает
    // должен быть переопределён в наследнике с необходимой логикой
  }
}
