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
    const buttons = keyboard.querySelectorAll('.key__button');
    const letters = keyboard.querySelectorAll('[data-key-code*="Key"]');
    let capsMode = false;

    function keyActivator(btns, shift = false) {
      btns.forEach((btn) => {
        const btnValus = btn.querySelectorAll('.key__value');
        btnValus.forEach((value) => {
          value.classList.remove('key__value_active');
        });
        if (shift) {
          btn.querySelector('.key__value-en-shift').classList.add('key__value_active');
        } else {
          btn.querySelector('.key__value-en-default').classList.add('key__value_active');
        }
      });
    }
    function keyHandler(keyItem, event) {
      if (keyItem.code === 'ShiftLeft' || keyItem.code === 'ShiftRight') {
        keyActivator(buttons, event.shiftKey);
      } else if (event.shiftKey) {
        inputAreaObj.setValue(keyItem.key.en.shift);
      } else if (keyItem.code === 'ControlLeft' || keyItem.code === 'ControlRight') {
        //
      } else if (keyItem.code === 'AltLeft' || keyItem.code === 'AltRight') {
        //
      } else if (keyItem.code === 'MetaLeft') {
        //
      } else if (keyItem.code === 'CapsLock') {
        capsMode = !capsMode;
        keyActivator(letters, capsMode);
      } else if (keyItem.code === 'Backspace') {
        //
      } else if (keyItem.code === 'Space') {
        inputAreaObj.setValue(' ');
      } else if (keyItem.code === 'Tab') {
        inputAreaObj.setValue('  ');
      } else if (keyItem.code === 'Enter') {
        inputAreaObj.setValue('\n');
      } else {
        inputAreaObj.setValue(keyItem.key.en.default);
      }
    }

    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      keyList.forEach((keyItem) => {
        if (keyItem.code === event.code) {
          keyHandler(keyItem, event);
        }
      });
      const key = keyboard.querySelector(`[data-key-code="${event.code}"]`);
      if (key) { key.classList.add('key__button_active'); }
    });

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyActivator(buttons, event.shiftKey);
      }
      buttons.forEach((button) => { button.classList.remove('key__button_active'); });
    });

    keyboard.addEventListener('mousedown', (event) => {
      event.preventDefault();
      const btn = event.target.closest('.key__button');
      const { keyCode } = btn.dataset;
      keyList.forEach((keyItem) => {
        if (keyItem.code === keyCode) { keyHandler(keyItem, event); }
      });
    });
    keyboard.addEventListener('mouseup', (event) => {
      event.preventDefault();
      buttons.forEach((button) => { button.classList.remove('key__button_active'); });
    });
  }

  get App() {
    return this.app;
  }
}
