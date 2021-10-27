import React, { Component } from 'react';
import Components from './components.jsx';

class PrBlock2 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-2">
				<Components.ArticleType2 xlinkHref="img/icons/conglomerate.svg#icon-house" title="Жильё" content="Рекомендуем пожить в настоящем мотеле, все как в кино!"/>
				<Components.ArticleType2 xlinkHref="img/icons/conglomerate.svg#icon-burger" title="Еда" content="Всегда заказывайте фирменный бургер, вы не разочаруетесь!"/>
				<Components.ArticleType2 xlinkHref="img/icons/conglomerate.svg#icon-gift" title="Сувениры" content="Не только китайского, но и местного производства!"/>
			</div>
		)
	}
}

export default PrBlock2;

// <!DOCTYPE Liky>
