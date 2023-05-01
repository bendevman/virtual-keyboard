import './keyboard.scss';
import Key from '../key/key';

export default class Keyboard {
  constructor(keys) {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    const keyboardList = document.createElement('ul');
    keyboardList.className = 'keyboard__list';
    keys.forEach((key) => {
      const keyElement = new Key(key);
      keyElement.init(keyboardList);
    });
    this.keyboard.appendChild(keyboardList);
  }

  init(element) {
    element.appendChild(this.keyboard);
  }
}
