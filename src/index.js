import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import { AppProvider } from "./Context/AppProvider";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
