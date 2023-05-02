import './key.scss';

export default class Key {
  constructor(keyItem) {
    this.key = document.createElement('li');
    this.key.className = 'key keyboard__item';
    const keyButton = document.createElement('button');
    keyButton.className = 'key__button';
    keyButton.dataset.keyCode = keyItem.code;
    const template = `
    <span class="key__value key__value-en-default key__value_active">${keyItem.key.en.default}</span>
    <span class="key__value key__value-en-shift">${keyItem.key.en.shift}</span>
    <span class="key__value key__value-ru-default">${keyItem.key.ru.default}</span>
    <span class="key__value key__value-ru-shift">${keyItem.key.ru.shift}</span>`;
    keyButton.innerHTML = template;
    this.key.appendChild(keyButton);
  }

  get Key() {
    return this.key;
  }
}
