import './key.scss';

export default function createKey(key) {
  const keyItem = document.createElement('li');
  keyItem.className = 'key keyboard__item';
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
    keyItem.classList.add('key_letter');
  } else if (ctrkeys.includes(keyCode)) {
    const keyClass = keyCode.toLowerCase();
    keyItem.classList.add(`key_${keyClass}`);
  }
  const keyButton = document.createElement('button');
  keyButton.className = 'key__button';

  const template = `
    <span class="key__value-en-default key__value_active">${key.key.en.default}</span>
    <span class="key__value-en-shift">${key.key.en.shift}</span>
    <span class="key__value-ru-default">${key.key.ru.default}</span>
    <span class="key__value-ru-shift">${key.key.ru.shift}</span>`;
  keyButton.innerHTML = template;

  keyItem.appendChild(keyButton);
  return keyItem;
}
