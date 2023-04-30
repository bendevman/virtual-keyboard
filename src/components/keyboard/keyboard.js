import './keyboard.scss';
import createKey from '../key/key';

export default function createKeyboard(keys) {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const keyboardList = document.createElement('ul');
  keyboardList.className = 'keyboard__list';
  keys.forEach((key) => {
    keyboardList.appendChild(createKey(key));
  });
  keyboard.appendChild(keyboardList);
  return keyboard;
}
