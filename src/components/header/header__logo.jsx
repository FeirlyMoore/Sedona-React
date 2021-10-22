import React, { Component } from 'react';

class HeaderLogo extends React.Component {
	render() {
		return(
			<div className="header__logo-wrapper logo" >
				<picture className="logo__picture">
					<img className="logo__img" src="img/logo/header-logo--mobile.png" alt="Logotype"/>
				</picture>
			</div>
		)
	}
}

export default HeaderLogo;