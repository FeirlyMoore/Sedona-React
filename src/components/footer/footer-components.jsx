import React, { Component } from 'react';

const FooterComponents = {
	CompanyTitle: function(props) {
		return(
			<div><span>#visitSEDONA{props.content}</span></div>
		)
	},
	SocialIcons: function(props) {
		return(
			<div>
				<ul>
					<li>
						<svg width="46" height="48">
							<use xlinkHref="img/icons/conglomerate.svg#icon-twitter"/>
						</svg>
					</li>
					<li>
						<svg width="47" height="48">
							<use xlinkHref="img/icons/conglomerate.svg#icon-facebook"/>
						</svg>
					</li>
					<li>
						<svg width="46" height="48">
							<use xlinkHref="img/icons/conglomerate.svg#icon-youtube"/>
						</svg>
					</li>
				</ul>
			</div>
		)
	},
	DevLogo: function(props) {
		return(
			<div>
				<span>Разработано</span>
				<img src="img/logo/html-academy-logo.svg" alt="Html Academy" width="37" height="auto"/>
				<img src="img/logo/2li.svg" alt="Likiz inc." width="125" height="auto"/>
			</div>
		)
	}
}

export default FooterComponents;
