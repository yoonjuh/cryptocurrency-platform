import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import {Provider} from 'react-redux';
import store from './store';
import App from './routes/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
