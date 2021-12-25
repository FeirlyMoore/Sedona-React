import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
	render() {
		return(
			<div className="header__nav-wrapper">
				<nav className="header__nav nav--closed">
					<button className="header__nav-toggle-button"/>
					<ul className="nav-list">
						<li className="nav-list__list-item">
							<Link to="/">Главная</Link>
						</li>
    				<li className="nav-list__list-item">
							<Link to="/gallery">Фото и видео</Link>
    				</li>
    				<li className="nav-list__list-item">
							<Link to="/form">Форма отзыва</Link>
    				</li>
    				<li className="nav-list__list-item">
    					<a href="https://github.com/REDFOX39-inc" target="_blank">REDFOX39 inc.</a>
    				</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default HeaderNav;

// /Sedona-React

// <!DOCTYPE Liky>
