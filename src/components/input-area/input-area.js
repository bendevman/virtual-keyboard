import './input-area.scss';

export default class InputArea {
  constructor() {
    this.inputArea = document.createElement('div');
    this.inputArea.className = 'input-area';
    this.inputTextarea = document.createElement('textarea');
    this.inputTextarea.className = 'input-area__textarea';
    this.inputTextarea.setAttribute('autofocus', '');
    this.inputArea.appendChild(this.inputTextarea);
  }

  setValue(key) {
    const temp = this.inputTextarea.value;
    this.inputTextarea.value = temp + key;
  }

  init(element) {
    element.appendChild(this.inputArea);
  }
}
