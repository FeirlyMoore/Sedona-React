import React, { Component } from 'react';

class Intro extends React.Component {
	render() {
		return(
			<div className="intro">
				<div className="intro__title-block title-block-1">
					<img className="intro__img" src="img/logo/intro.svg" alt="Intro"/>
				</div>
				<div className="intro__deco-block">
				<picture className="intro__deco-picture">
					<source srcSet="img/decorative/decorative-top-arrows.svg" media="(min-width: 1240px)"/>
					<img className="intro__deco-img" src="img/decorative/decorative-top-arrows--mobile.svg" alt="deco"/>
				</picture>
				</div>
			</div>
		)
	}
}

export default Intro;
