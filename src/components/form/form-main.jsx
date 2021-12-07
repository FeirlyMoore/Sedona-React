// Packages && Libs
import React, { Component } from 'react';
/* Components */
import Components from './../components.jsx';


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
					<article className="form__article">
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
					<article className="form__article">
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
					<article className="form__article">
						<h2 className="form-article__title">Ваше Общее впечатление :</h2>
						<ul>
							<li>
								<label className="form__label">
									Скорее положительное
									<input className="form__input form__input--radio" type="radio" name="impression" value="good" checked/>
								</label>
							</li>
							<li>
								<label className="form__label">
									Скорее отрицательное
									<input className="form__input form__input--radio" type="radio" name="impression" value="bad"/>
								</label>
							</li>
							<li>
								<label className="form__label">
									Затрудняюсь ответить
									<input className="form__input form__input--radio" type="radio" name="impression" value="indefinite"/>
								</label>
							</li>
						</ul>
					</article>
					<article className="form__article">
						<h2 className="form-article__title">Посещённые достопримечательности :</h2>
						<label className="form__label">
							Мост Дьявола
							<input className="form__input form__input--checkbox" type="checkbox" name="devil's_bridge" checked/>
						</label>
						<label className="form__label">
							Гора-Колокол
							<input className="form__input form__input--checkbox" type="checkbox" name="the_bell_mountain" checked/>
						</label>
						<label className="form__label">
							Слайд-парк
							<input className="form__input form__input--checkbox" type="checkbox" name="slide_park" checked/>
						</label>
						<label className="form__label">
							Красные скалы
							<input className="form__input form__input--checkbox" type="checkbox" name="red_rocks"/>
						</label>
					</article>
					<article className="form__article">
						<h2 className="form-article__title">Опишите свои эмоции :</h2>
						<label className="form__label">
							<textarea id="comment" cols="30" rows="10" placeholder="Опишите подробно все свои восторги" name="comment"/>
						</label>
					</article>
					<div class="form__send-button-wrapper">
          	<button class="form__send-button" type="submit">Отправить отзыв</button>
          	<p class="form__required-notify">* — Обязательные поля</p>
        	</div>
				</form>
			</main>
		)
	}
}

export default FormMain;

// <!DOCTYPE Liky>
