import React, { Component } from 'react';

class Footer extends React.Component {
	render() {
		return(
			<footer className="footer">
				<div><span>#visitSEDONA</span></div>
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
				<div>
					<span>Разработано</span>
					<img src="" alt=""/>
				</div>
			</footer>
		)
	}
}

export default Footer;