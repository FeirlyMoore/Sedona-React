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

let navToggle = document.querySelector('.nav-toggle-button--js'); // Кнопка открытия меню
let nav = document.querySelector('.header__nav'); // Меню

// Часть конструкции "noscript", как превентивная мера урезки функционала приложения.
// По умолчанию меню всегда открыто, при прогрузке скриптов класс "nav--opened" будет убран,
// а вместо него добавлен "nav--closed", что и скроет меню.
nav.classList.remove('nav--opened');
nav.classList.add('nav--closed');

// Конструкция, описывающая поведение меню при клике на кнопку открытия/закрытия меню.
navToggle.onclick = () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  }
}

let navListItems = document.querySelectorAll('.nav-list__item'); // Все элементы меню

// Конструкция, описывающая поведение меню при клике на элемент его списка.
// При клике на элемент списка меню оно будет закрываться,
// если меню имеет класс "nav--opened" и ширина окна больше или равна 768 пикселам - оно закрыто не будет.
if (navListItems) { // Проверка на наличие элемента.
	for (let i = 0; i < navListItems.length; i++) {
		navListItems[i].onclick = () => {
			if (nav.classList.add('nav--opened') && window.innerWidth >= 768) return;
				nav.classList.remove('nav--opened');
		  	nav.classList.add('nav--closed');
		}
	}
}

//<!DOCTYPE Liky>
