// Packages && Libs
import React, { Component } from 'react';
/* Components */

class Contacts extends React.Component {
	render() {
		return(
			<article className="form__article form__article--contacts">
				<h2 className="form-article__title">Контактная информация :</h2>
				<label className="form__label">
					<input className="form__input  form__input--text" type="tel" placeholder="Введите телефон"
                	name="phone" required/>
            <svg className="" width="19" height="14">
              <use xlinkHref="img/icons/conglomerate__decorative-icons.svg#icon-email"/>
            </svg>
				</label>
				<label className="form__label">
					<input className="form__input  form__input--text" type="email" placeholder="Введите e-mail"
                name="email" required/>
            <svg className="" width="19" height="14">
              <use xlinkHref="img/icons/conglomerate__decorative-icons.svg#icon-email"/>
            </svg>
				</label>
			</article>
		)
	}
}

export default Contacts;

// <!DOCTYPE Liky>