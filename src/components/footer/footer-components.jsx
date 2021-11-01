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
						<svg width="18" height="15" ariaLabel="Twitter">
							<use xlinkHref="img/icons/conglomerate.svg#icon-twitter"/>
						</svg>
					</li>
					<li>
						<svg width="9" height="19" ariaLabel="Facebook">
							<use xlinkHref="img/icons/conglomerate.svg#icon-facebook"/>
						</svg>
					</li>
					<li>
						<svg width="20" height="14" ariaLabel="YouTube">
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
				<img src="" alt=""/>
			</div>
		)
	}
}

export default FooterComponents;