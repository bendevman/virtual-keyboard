import './app.scss';
import createInputArea from '../input-area/input-area';

export default function createApp() {
  const app = document.createElement('div');
  app.className = 'app';

  app.appendChild(createInputArea());
  return app;
}
