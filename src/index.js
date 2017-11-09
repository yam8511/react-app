import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import HelloMessage from './components/HelloMessage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <HelloMessage name="Zuolar" />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
