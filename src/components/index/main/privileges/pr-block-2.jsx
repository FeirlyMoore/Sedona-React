import React, { Component } from 'react';

class PrBlock2 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-2">
				<article>
					<svg>
						<use xlinkHref="img/icons/conglomerate.svg#icon-house"/>
					</svg>
					<h2>Жильё</h2>
					<p>Рекомендуем пожить в настоящем мотеле, все как в кино!</p>
				</article>
				<article>
					<svg>
						<use xlinkHref="img/icons/conglomerate.svg#icon-burger"/>
					</svg>
					<h2>Еда</h2>
					<p>Всегда заказывайте фирменный бургер, вы не разочаруетесь!</p>
				</article>
				<article>
					<svg>
						<use xlinkHref="img/icons/conglomerate.svg#icon-gift"/>
					</svg>
					<h2>Сувениры</h2>
					<p>Не только китайского, но и местного производства!</p>
				</article>
			</div>
		)
	}
}

export default PrBlock2;

// <!DOCTYPE Liky>
