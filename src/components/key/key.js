import './key.scss';

export default class Key {
  constructor(key) {
    this.keyItem = document.createElement('li');
    this.keyItem.className = 'key keyboard__item';
    const keyButton = document.createElement('button');
    keyButton.className = 'key__button';
    keyButton.dataset.keyCode = key.code;
    keyButton.innerText = key.key.en.default;
    this.keyItem.appendChild(keyButton);
  }

  init(element) {
    element.appendChild(this.keyItem);
  }
}
