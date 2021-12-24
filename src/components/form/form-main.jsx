// Packages && Libs
import React, { Component } from 'react';
/* Components */
import Components from './../components.jsx';
import PersonalData from './form-component__personal-data.jsx';
import Contacts from './form-component__contacts.jsx';
import Impression from './form-component__impression.jsx';
import Attractions from './form-component__attractions.jsx';
import CommentForm from './form-component__comment-form.jsx';


class FormMain extends React.Component {
	render() {

		return(
			<main className="main">
				<Components.MainTitleBlock
				 title="Оставьте свой отзыв"
				 subtitle=" Помогите нашим отелям стать лучше!
				 оставьте отзыв о них, а также о посещенных вами достопримечательностях"
				/>
				<form className="form form--js" action="https://echo.htmlacademy.ru" method="POST">
					<PersonalData/>
					<Contacts/>
					<Impression/>
					<Attractions/>
					<CommentForm/>
					<div className="form__send-button-wrapper">
          	<button className="form__send-button send-button--js" type="submit">Отправить отзыв</button>
          	<p className="form__required-notify">* — Обязательные поля</p>
        	</div>
				</form>
			</main>
		)
	}
}

export default FormMain;

// <!DOCTYPE Liky>
