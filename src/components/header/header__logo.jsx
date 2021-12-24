import React, { Component } from 'react';

class HeaderLogo extends React.Component {
	render() {
		return(
			<div className="header__logo-wrapper logo">
				<picture className="logo__picture">
					<source srcSet="img/logo/header-logo--desktop.png" media="(min-width: 1200px)"/>
					<img className="logo__img" src={'img/logo/header-logo--mobile.png'} alt="Logotype"/>
				</picture>
			</div>
		)
	}
}

export default HeaderLogo;
