// Packages && Libs
import React, { Component } from 'react';
/* Components */

class PersonalData extends React.Component {
	render() {
		return(
			<article className="form__article form__article--personal-data">
				<h2 className="form-article__title">Представьтесь :</h2>
				<ul  className="list list-personal-data">
					<li className="list__list-item">
						<label className="form__label">
							Фамилия* :
							<input className="form__input form__input--text" type="text" placeholder="Нюхнина" name="surname" required/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Имя* :
							<input className="form__input form__input--text" type="text" placeholder="Акакий" name="name" required/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Отчество* :
							<input className="form__input form__input--text" type="text" placeholder="Евпатьевич" name="patronymic" required/>
						</label>
					</li>
				</ul>
			</article>
		)
	}
}

export default PersonalData;

// <!DOCTYPE Liky>
