import React, { Component } from 'react';
import Components from './../../../components.jsx';

class PrBlock1 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-1">
				<Components.ArticleType1 title="Настоящий городок" decoEl="— №1 —" content="Седона не аттракцион для туристов, там течёт своя жизнь"/>
				<picture>
				  <source srcSet="img/privileges/privileges-city--desktop.png" media="(min-width: 1200px)"/>
				  <source srcSet="img/privileges/privileges-city--tablet.png" media="(min-width: 768px)"/>
					<img src="img/privileges/privileges-city--moibile.png" alt="Sedona"/>
				</picture>
			</div>
		)
	}
}

export default PrBlock1;

// <!DOCTYPE Liky>
