import './key.scss';

export default class Key {
  constructor(key) {
    this.keyItem = document.createElement('li');
    this.keyItem.className = 'key keyboard__item';
    const keyCode = key.code;
    const ctrkeys = [
      'Backspace',
      'Tab',
      'Delete',
      'CapsLock',
      'Enter',
      'ShiftLeft',
      'ArrowUp',
      'ShiftRight',
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'AltRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
      'ControlRight',
    ];
    if (keyCode.includes('Key')) {
      this.keyItem.classList.add('key_letter');
    } else if (ctrkeys.includes(keyCode)) {
      const keyClass = keyCode.toLowerCase();
      this.keyItem.classList.add(`key_${keyClass}`);
    }
    const keyButton = document.createElement('button');
    keyButton.className = 'key__button';
    const template = `
      <span class="key__value-en-default key__value_active">${key.key.en.default}</span>
      <span class="key__value-en-shift">${key.key.en.shift}</span>
      <span class="key__value-ru-default">${key.key.ru.default}</span>
      <span class="key__value-ru-shift">${key.key.ru.shift}</span>`;
    keyButton.innerHTML = template;
    this.keyItem.appendChild(keyButton);
  }

  init(element) {
    element.appendChild(this.keyItem);
  }
}
