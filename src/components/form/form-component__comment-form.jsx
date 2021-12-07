// Packages && Libs
import React, { Component } from 'react';
/* Components */

class CommentForm extends React.Component {
	render() {
		return(
			<article className="form__article form__article--comment">
				<h2 className="form-article__title">Опишите свои эмоции :</h2>
				<label className="form__label">
					<textarea id="comment" cols="30" rows="10" placeholder="Опишите подробно все свои восторги" name="comment"/>
				</label>
			</article>
		)
	}
}

export default CommentForm;

// <!DOCTYPE Liky>