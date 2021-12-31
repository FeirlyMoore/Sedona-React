// Packages && Libs
import React, { Component } from 'react';
/* Components */

class Attractions extends React.Component {
	render() {
		return(
			<article className="form__article form__article--visited">
				<h2 className="form-article__title">Посещённые достопримечательности :</h2>
				<ul className="list list-attractions">
					<li className="list__list-item">
						<label className="form__label">
							Мост Дьявола
							<input className="form__input form__input--checkbox" type="checkbox" name="attractions" value="devil's_bridge" defaultChecked/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Гора-Колокол
							<input className="form__input form__input--checkbox" type="checkbox" name="attractions" value="the_bell_mountain" defaultChecked/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Слайд-парк
							<input className="form__input form__input--checkbox" type="checkbox" name="attractions" value="slide_park" defaultChecked/>
						</label>
					</li>
					<li className="list__list-item">
						<label className="form__label">
							Красные скалы
							<input className="form__input form__input--checkbox" type="checkbox" name="attractions" value="red_rocks"/>
						</label>
					</li>
				</ul>
			</article>
		)
	}
}

export default Attractions;

// <!DOCTYPE Liky>
