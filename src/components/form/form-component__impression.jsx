// Packages && Libs
import React, { Component } from 'react';
/* Components */

class Impression extends React.Component {
	render() {
		return(
			<article className="form__article form__article--impression">
				<h2 className="form-article__title">Ваше Общее впечатление :</h2>
				<ul className="list list-impression">
					<li className="list__list-item">
						<label className="form__label">
							Скорее положительное
							<input className="form__input form__input--radio" type="radio" name="impression" value="good" checked/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Скорее отрицательное
							<input className="form__input form__input--radio" type="radio" name="impression" value="bad"/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Затрудняюсь ответить
							<input className="form__input form__input--radio" type="radio" name="impression" value="indefinite"/>
						</label>
					</li>
				</ul>
			</article>
		)
	}
}

export default Impression;

// <!DOCTYPE Liky>
