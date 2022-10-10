const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'Выбрать сортировку';
  const items = data.map((item) => {
    let classes = '';
    if (item.id === selectedId) {
      text = item.text;
      classes = 'selected';
    }
    return `<li class="select__item ${classes}" data-type="item" data-id="${item.id}">${item.text}</li>`
  });

  return `
  <div class="select__backdrop" data-type="backdrop"></div>
  <div class="select__input" data-type="input">
    <span data-type="text">${text}</span>
  </div>
  <div class="select__dropdown">
    <ul class="select__list reset-list">
      ${items.join('')}
    </ul>
  </div>
  `
};

export class Select {
  constructor(selector, options) {
    this.el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    this.#render();
    this.#setUp();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.el.classList.add('select');
    this.el.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }

  #setUp() {
    this.clickHandler = this.clickHandler.bind(this);
    this.el.addEventListener('click', this.clickHandler);
    this.text = this.el.querySelector('[data-type="text"]');
  }

  clickHandler(evt) {
    const { type } = evt.target.dataset;
    if (type === 'input' || type === 'text') {
      this.toggle();
    } else if (type === 'item') {
      const { id } = evt.target.dataset;
      this.select(id);
    } else if (type === 'backdrop') {
      this.close();
    }
  }

  get isOpen() {
    return this.el.classList.contains('open');
  }

  get current() {
    return this.options.data.find((item) => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id;
    this.text.textContent = this.current.text;
    this.el.querySelectorAll('[data-type="item"]').forEach((el) => {
      el.classList.remove('selected');
    })
    this.el.querySelector(`[data-id="${id}"]`).classList.add('selected');
    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  destroy() {
    this.el.removeEventListener('click', this.clickHandler);
    this.el.innerHTML = '';
  }
};
