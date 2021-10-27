import React, { Component } from 'react';
import Components from './components.jsx';

class PrBlock3 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-3">
				<Components.ArticleType1 title="Там есть мост дьявола" decoEl="— №2 —" content="Да, по нему можно пройти! Если вы осмелитесь, конечно"/>
				<picture>
				  <source srcSet="img/privileges/privileges-bridge--desktop.png"/>
				  <source srcSet="img/privileges/privileges-bridge--tablet.png"/>
					<img src="img/privileges/privileges-bridge--moibile.png" alt="Bridge"/>
				</picture>
			</div>
		)
	}
}

export default PrBlock3;

// <!DOCTYPE Liky>
