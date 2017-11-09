import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import HelloMessage from './components/HelloMessage';
import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <HelloMessage />
        <TodoApp />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
