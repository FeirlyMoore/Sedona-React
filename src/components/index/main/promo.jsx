import React, { Component } from 'react';
import Components from './../../components.jsx';

class Promo extends React.Component {
	render() {
		return(
			<section className="promo">
				<h2 className="promo__title">Заинтересовались ?</h2>
				<p className="promo__content">
					Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в седоне
				</p>
				<Components.Button spanClass="button wide-button" content="Найти гостиницу"/>
			</section>
		)
	}
}

export default Promo;
