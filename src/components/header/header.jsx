import React, { Component } from 'react';
import HeaderLogo from './header__logo.jsx';
import HeaderNav from './header__nav.jsx';

class Header extends React.Component {
	constructor(props){
		super()
	}
	render(){
		return (
			<header className="header">
				<HeaderLogo/>
				<HeaderNav/>
			</header>
		)
	}
}

export default Header;