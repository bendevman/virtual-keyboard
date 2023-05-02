import 'normalize.css';
import './index.html';
import './style.scss';
import App from './components/app/app';

const appObj = new App();
const { app } = appObj;
document.getElementById('root').appendChild(app);
