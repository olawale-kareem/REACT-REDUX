import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Apps from './components/appComponents/Appy'
import { Provider } from "react-redux";
import store from './store'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
        <Apps />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



