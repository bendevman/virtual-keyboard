import './app.scss';
import InputArea from '../input-area/input-area';
import Keyboard from '../keyboard/keyboard';

const keys = require('./keys.json');

export default class App {
  constructor() {
    this.app = document.createElement('div');
    this.app.className = 'app';
    const inputArea = new InputArea();
    inputArea.init(this.app);
    const keyboard = new Keyboard(keys);
    keyboard.init(this.app);
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      inputArea.setValue(event.key);
    });
  }

  init() {
    document.getElementById('root').appendChild(this.app);
  }
}
