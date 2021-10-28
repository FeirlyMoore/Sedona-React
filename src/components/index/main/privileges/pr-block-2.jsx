import React, { Component } from 'react';
import Components from './../../../components.jsx';

class PrBlock2 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-2">
				<Components.ArticleType2 xlinkHref="img/icons/conglomerate.svg#icon-house" width="75" height="72" ariaLabel="House"
					title="Жильё" content="Рекомендуем пожить в настоящем мотеле, все как в кино!"/>
				<Components.ArticleType2 xlinkHref="img/icons/conglomerate.svg#icon-burger" width="76" height="68" ariaLabel="Burger"
					title="Еда" content="Всегда заказывайте фирменный бургер, вы не разочаруетесь!"/>
				<Components.ArticleType2 xlinkHref="img/icons/conglomerate.svg#icon-gift" width="64" height="75" ariaLabel="Gift"
					title="Сувениры" content="Не только китайского, но и местного производства!"/>
			</div>
		)
	}
}

export default PrBlock2;

// <!DOCTYPE Liky>
