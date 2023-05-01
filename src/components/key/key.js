import './key.scss';

export default class Key {
  constructor(keyItem) {
    this.key = document.createElement('li');
    this.key.className = 'key keyboard__item';
    const keyButton = document.createElement('button');
    keyButton.className = 'key__button';
    keyButton.dataset.keyCode = keyItem.code;
    keyButton.innerText = keyItem.key.en.default;
    this.key.appendChild(keyButton);
  }

  get Key() {
    return this.key;
  }
}
