import React, { Component } from 'react';

class HeaderNav extends React.Component {
	render() {
		return(
			<div className="header__nav-wrapper">
				<button className="header__nav-button" ></button>
				<nav className="header__nav nav" >
					<ul>
						<li className="header__list-item">Главная</li>
    				<li className="header__list-item">Фото и видео</li>
    				<li className="header__list-item">Форма отзыва</li>
    				<li className="header__list-item">Html academy</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default HeaderNav;