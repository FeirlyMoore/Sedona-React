import React, { Component } from 'react';
import FooterComponents from './footer-components.jsx';

class Footer extends React.Component {
	render() {
		return(
			<footer className="footer">
				<FooterComponents.CompanyTitle/>
				<FooterComponents.SocialIcons/>
				<FooterComponents.DevLogo/>
			</footer>
		)
	}
}

export default Footer;