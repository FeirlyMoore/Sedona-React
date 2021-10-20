import React, { Component } from 'react';

class HeaderLogo extends React.Component {
	render() {
		<div className="header__logo logo" >
			<picture className="logo__picture">
				<img className="logo__img" src="./img/logo/header-logo--mobile.png" alt="Logotype">
			</picture>
			<button className="header__nav-button" ></button>
			<nav className="header__nav nav" >
				<ul>
					<li class="header__list-item">Главная</li>
    			<li class="header__list-item">Фото и видео</li>
    			<li class="header__list-item">Форма отзыва</li>
    			<li class="header__list-item">Html academy</li>
				</ul>
			</nav>
		</div>
	}
}

class Header extends React.Component {
	constructor(props){

	}
	render(){
		<header className="header">
			<HeaderLogo/>
		</header>
	}
}