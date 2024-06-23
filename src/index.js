import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

registerSW();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
