import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
	render() {
		return(
			<div className="header__nav-wrapper">
				<button className="header__nav-button"/>
				<nav className="header__nav nav" >
					<ul>
						<li className="header__list-item">
							<Link to="/">Главная</Link>
						</li>
    				<li className="header__list-item">
							<Link to="/gallery">Фото и видео</Link>
    				</li>
    				<li className="header__list-item">
							<Link to="/form">Форма отзыва</Link>
    				</li>
    				<li className="header__list-item">
    					<a href="https://github.com/REDFOX39-inc" target="_blank">REDFOX39 inc.</a>
    				</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default HeaderNav;
