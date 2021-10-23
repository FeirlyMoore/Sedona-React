import React, { Component } from 'react';

class PrBlock1 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-1">
				<article>
					<h2>Настоящий городок</h2>
					<span>— №1 —</span>
					<p>Седона не аттракцион для туристов, там течёт своя жизнь</p>
				</article>
				<picture>
				  <source srcSet="img/privileges/privileges-city--desktop.png"/>
				  <source srcSet="img/privileges/privileges-city--tablet.png"/>
					<img src="img/privileges/privileges-city--moibile.png" alt="Sedona"/>
				</picture>
			</div>
		)
	}
}

export default PrBlock1;

// <!DOCTYPE Liky>
