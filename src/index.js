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

let navToggle = document.querySelector('.nav-toggle-button--js');
let nav = document.querySelector('.header__nav');

nav.classList.remove('nav--opened');
nav.classList.add('nav--closed');

navToggle.onclick = () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove("nav--closed");
    nav.classList.add('nav--opened');
  } else {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
}

let navListItems = document.querySelectorAll('.nav-list__item');

if (navListItems) {
	for (let i = 0; i < navListItems.length; i++) {
		navListItems[i].onclick = () => {
			if (nav.classList.add('nav--opened') && window.innerWidth >= 768) {
				return
			} else {
				nav.classList.remove('nav--opened');
		    nav.classList.add('nav--closed');
			}
		}
	}
}
