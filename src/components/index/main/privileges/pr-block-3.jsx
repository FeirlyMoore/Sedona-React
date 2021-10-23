import React, { Component } from 'react';

class PrBlock3 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-3">
				<article>
					<h2>Там есть мост дьявола</h2>
					<span>— №2 —</span>
					<p>Да, по нему можно пройти! Если вы осмелитесь, конечно</p>
				</article>
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
