import './app.scss';
import createInputArea from '../input-area/input-area';
import createKeyboard from '../keyboard/keyboard';

export default function createApp() {
  const app = document.createElement('div');
  app.className = 'app';

  app.appendChild(createInputArea());
  app.appendChild(createKeyboard());

  return app;
}
