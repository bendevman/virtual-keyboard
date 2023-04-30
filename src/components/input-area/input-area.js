import './input-area.scss';

export default function createInputArea() {
  const inputArea = document.createElement('div');
  inputArea.className = 'input-area';
  const inputTextarea = document.createElement('textarea');
  inputTextarea.className = 'input-area__textarea';
  inputTextarea.setAttribute('autofocus', '');
  inputArea.appendChild(inputTextarea);
  return inputArea;
}
