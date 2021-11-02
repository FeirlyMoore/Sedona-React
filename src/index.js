// Packages && Libs
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// Components && Styles
import App from './components/App.jsx';
import './style.scss';

ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
  	  <App/>
  	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
