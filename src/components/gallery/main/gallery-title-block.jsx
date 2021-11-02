import React, { Component } from 'react';

class GalleryTitleBlock extends React.Component {
	render() {
		return(
			<div className="gallery__title-block">
				<h1 className="title">Фото и видео</h1>
				<p className="subtitle">
					Не можете решиться на путешествие из-за курса?&nbsp; Фотографии помогут вам забыть о политике и экономике.
				</p>
			</div>
		)
	}
}

export default GalleryTitleBlock;
