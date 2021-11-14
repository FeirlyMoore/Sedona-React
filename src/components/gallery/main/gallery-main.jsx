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
						// Picture block
						picClass="picture-block__picture-1"
						source1Src="img/gallery/picture-1--desktop.png"
						source2Src="img/gallery/picture-1--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-1--mobile.png"
						imgAlt="Неродные просторы"
						imgWidth="auto"
						imgHeight="auto"
						// Description block
						descClass="picture-block__description-1"
						titleClass="picture-block__title"
						title="Неродные просторы"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Борис"
						// Like counter block
						likeClass="picture-block__like-1"
						count="1350"
					/>
					<PictureBlock PicBlockClass="picture-block-2"
						// Picture block
						picClass="picture-block__picture-2"
						source1Src="img/gallery/picture-2--desktop.png"
						source2Src="img/gallery/picture-2--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-2--mobile.png"
						imgAlt="Местная растительность"
						imgWidth="auto"
						imgHeight="auto"
						// Description block
						descClass="picture-block__description-2"
						titleClass="picture-block__title"
						title="Местная растительность"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Сергей"
						// Like counter block
						likeClass="picture-block__like-2"
						count="143"
					/>
					<PictureBlock PicBlockClass="picture-block-3"
						// Picture block
						picClass="picture-block__picture-3"
						source1Src="img/gallery/picture-3--desktop.png"
						source2Src="img/gallery/picture-3--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-3--mobile.png"
						imgAlt="Дорога на север"
						imgWidth="auto"
						imgHeight="auto"
						// Description block
						descClass="picture-block__description-3"
						titleClass="picture-block__title"
						title="Дорога на север"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Пётр"
						// Like counter block
						likeClass="picture-block__like-3"
						count="96"
					/>
					<PictureBlock PicBlockClass="picture-block-4"
						// Picture block
						picClass="picture-block__picture-4"
						source1Src="img/gallery/picture-4--desktop.png"
						source2Src="img/gallery/picture-4--tablet.png"
						imgClass="picture-block__img"
						imgSrc="img/gallery/picture-4--mobile.png"
						imgAlt="Мост дьявола"
						imgWidth="auto"
						imgHeight="auto"
						// Description block
						descClass="picture-block__description-4"
						titleClass="picture-block__title"
						title="Мост дьявола"
						subtitleClass="picture-block__subtitle"
						subtitle="Автор фото: Антон"
						// Like counter block
						likeClass="picture-block__like-4"
						count="254"
					/>
				</div>
			</main>
		)
	}
}

export default GalleryMain;
