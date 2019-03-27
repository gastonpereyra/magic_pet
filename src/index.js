// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.scss';
import '@fortawesome/fontawesome-free/js/all.js';
// COMPONENTES
import App from './App';

// Workers
import * as serviceWorker from './serviceWorker';

// Agregar al HTML
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
