import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreContext, store } from './stores/store';


ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
