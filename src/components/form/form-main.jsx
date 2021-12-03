// Packages && Libs
import React, { Component } from 'react';
/* Components */

class FormMain extends React.Component {
	render() {

		return(
			<main className="main">
				<form className="form form--js" action="https://echo.htmlacademy.ru" method="POST">
					<article class="form__article">
						<h2 className="form-article__title"></h2>
						<label for="" className="form__label">
							<input type="text" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="text" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="text" class="form__input"/>
						</label>
					</article>
					<article class="form__article">
						<h2 className="form-article__title"></h2>
						<label for="" className="form__label">
							<input type="text" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="text" class="form__input"/>
						</label>
					</article>
					<article class="form__article">
						<h2 className="form-article__title"></h2>
						<label for="" className="form__label">
							<input type="radio" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="radio" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="radio" class="form__input"/>
						</label>
					</article>
					<article class="form__article">
						<h2 className="form-article__title"></h2>
						<label for="" className="form__label">
							<input type="checkbox" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="checkbox" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="checkbox" class="form__input"/>
						</label>
						<label for="" className="form__label">
							<input type="checkbox" class="form__input"/>
						</label>
					</article>
					<article className="form__article">
						<h2 className="form-article__title"></h2>
						<label for="" className="form__label">
							<textarea name="" id="" cols="30" rows="10"/>
						</label>
					</article>
				</form>
			</main>
		)
	}
}

export default FormMain;

// <!DOCTYPE Liky>
