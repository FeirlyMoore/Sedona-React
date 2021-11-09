// Packages && Libs
import React, { Component } from 'react';
/* Components */
import GalleryTitleBlock from './gallery-title-block.jsx';
import PictureBlock from "./picture-block.jsx";

class GalleryMain extends React.Component {
	render() {

		return(
			<main className="main">
				<GalleryTitleBlock/>
				<div className="picture-block-wrapper">
					<PictureBlock PicBlockClass="picture-block-1"
						picClass="picture-block__picture-1"
						source1Src="img/gallery/picture-1--desktop.png"
						source2Src="img/gallery/picture-1--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-1--mobile.png"
						imgAlt="Неродные просторы"
						imgWidth="auto"
						imgHeight="auto"
						descClass="picture-block__description-1"
						titleClass="picture-block__title"
						title=""
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Борис"
						likeClass="picture-block__like-1"
						iconLikeClass="icon-like-1"
						svgWidth="23"
						svgHeight="21"
						xlinkHref="img/icons/conglomerate.svg#icon-like"
						likeCountClass="like-counter-1"
						count="1350"
					/>
					<PictureBlock PicBlockClass="picture-block-2"
						picClass="picture-block__picture-2"
						source1Src="img/gallery/picture-2--desktop.png"
						source2Src="img/gallery/picture-2--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-2--mobile.png"
						imgAlt=""
						imgWidth="auto"
						imgHeight="auto"
						descClass="picture-block__description-2"
						titleClass="picture-block__title"
						title="Местная растительность"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Сергей"
						likeClass="picture-block__like-2"
						iconLikeClass="icon-like-2"
						svgWidth="23"
						svgHeight="21"
						xlinkHref="img/icons/conglomerate.svg#icon-like"
						likeCountClass="like-counter-2"
						count="143"
					/>
					<PictureBlock PicBlockClass="picture-block-3"
						picClass="picture-block__picture-3"
						source1Src="img/gallery/picture-3--desktop.png"
						source2Src="img/gallery/picture-3--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-3--mobile.png"
						imgAlt=""
						imgWidth="auto"
						imgHeight="auto"
						descClass="picture-block__description-3"
						titleClass="picture-block__title"
						title="Дорога на север"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Пётр"
						likeClass="picture-block__like-3"
						iconLikeClass="icon-like-3"
						svgWidth="23"
						svgHeight="21"
						xlinkHref="img/icons/conglomerate.svg#icon-like"
						likeCountClass="like-counter-3"
						count="96"
					/>
					<PictureBlock PicBlockClass="picture-block-4"
						picClass="picture-block__picture-4"
						source1Src="img/gallery/picture-4--desktop.png"
						source2Src="img/gallery/picture-4--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-4--mobile.png"
						imgAlt=""
						imgWidth="auto"
						imgHeight="auto"
						descClass="picture-block__description-4"
						titleClass="picture-block__title"
						title="Мост дьявола"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Антон"
						likeClass="picture-block__like-4"
						iconLikeClass="icon-like-4"
						svgWidth="23"
						svgHeight="21"
						xlinkHref="img/icons/conglomerate.svg#icon-like"
						likeCountClass="like-counter-4"
						count="254"
					/>
				</div>
			</main>
		)
	}
}

export default GalleryMain;