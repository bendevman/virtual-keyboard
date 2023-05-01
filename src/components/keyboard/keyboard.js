import './keyboard.scss';
import Key from '../key/key';

export default class Keyboard {
  constructor(keys) {
    this.keyboard = document.createElement('div');
    this.keyboard.className = 'keyboard';
    const keyboardList = document.createElement('ul');
    keyboardList.className = 'keyboard__list';
    keys.forEach((keyItem) => {
      const keyObj = new Key(keyItem);
      const { key } = keyObj;
      keyboardList.appendChild(key);
    });
    this.keyboard.appendChild(keyboardList);
  }

  get Keyboard() {
    return this.keyboard;
  }
}
