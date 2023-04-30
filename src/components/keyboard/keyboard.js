import './keyboard.scss';

export default function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const keyboardList = document.createElement('ul');
  keyboardList.className = 'keyboard__list';

  keyboard.appendChild(keyboardList);
  return keyboard;
}
