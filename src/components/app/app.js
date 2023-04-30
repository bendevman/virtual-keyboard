import './app.scss';
import createInputArea from '../input-area/input-area';
import createKeyboard from '../keyboard/keyboard';

const keys = require('./keys.json');

export default function createApp() {
  const app = document.createElement('div');
  app.className = 'app';

  const inputArea = createInputArea();
  const textarea = inputArea.querySelector('.input-area__textarea');
  const keyboard = createKeyboard(keys);
  app.appendChild(inputArea);
  app.appendChild(keyboard);

  textarea.addEventListener('keydown', (event) => {
    const temp = textarea.value;
    textarea.value = temp + event.key;
  });

  return app;
}
