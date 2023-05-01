import './app.scss';
import InputArea from '../input-area/input-area';
import Keyboard from '../keyboard/keyboard';

const keyList = require('./keys.json');

export default class App {
  constructor() {
    this.app = document.createElement('div');
    this.app.className = 'app';
    const inputAreaObj = new InputArea();
    const { inputArea } = inputAreaObj;
    this.app.appendChild(inputArea);
    const keyboardObj = new Keyboard(keyList);
    const { keyboard } = keyboardObj;
    this.app.appendChild(keyboard);

    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      inputArea.setValue(event.key);
    });
  }

  get App() {
    return this.app;
  }
}
