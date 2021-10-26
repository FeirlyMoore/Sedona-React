import React, { Component } from 'react';

const Components = {
	ArticleType1: function(props) {
		return(
			<article className={props.artcClass}>
				<h2 className={props.hClass}>{props.title}</h2>
				<span className={props.spClass}>{props.decoEl}</span>
				<p className={props.pClass}>{props.content}</p>
			</article>
		)
	}
}

class PrBlock4 extends React.Component {
	render() {
		return(
			<div className="privileges__block privileges__block-4">
			<Components.ArticleType1 title="Небольшая площадь" decoEl="— №3 —" content="Все интересные места находятся очень близко"/>
			<Components.ArticleType1 title="Красивая дорога" decoEl="— №4 —" content="Ехать в Седону из Лас-Вегаса совсем не скучно!"/>
			<Components.ArticleType1 title="Мало туристов" decoEl="— №5 —" content="Большинство едет в гранд каньон и толпится там"/>
			</div>
		)
	}
}

export default PrBlock4;

// <!DOCTYPE Liky>
