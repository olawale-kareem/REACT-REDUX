import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Apps from './components/appComponents/Appy'
import { Provider } from "react-redux";
import store from './store'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
        <Apps />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



