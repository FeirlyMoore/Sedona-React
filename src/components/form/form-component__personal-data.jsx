// Packages && Libs
import React, { Component } from 'react';
/* Components */

class PersonalData extends React.Component {
	render() {
		return(
			<article className="form__article form__article--personal-data">
				<h2 className="form-article__title">Представьтесь :</h2>
				<label className="form__label">
					Фамилия* :
					<input className="form__input form__input--text" type="text" placeholder="Нюхнина" name="surname" required/>
				</label>
				<label className="form__label">
					Имя* :
					<input className="form__input form__input--text" type="text" placeholder="Акакий" name="name" required/>
				</label>
				<label className="form__label">
					Отчество* :
					<input className="form__input form__input--text" type="text" placeholder="Евпатьевич" name="patronymic" required/>
				</label>
			</article>
		)
	}
}

export default PersonalData;

// <!DOCTYPE Liky>