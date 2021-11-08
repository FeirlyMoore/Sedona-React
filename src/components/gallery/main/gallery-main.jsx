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
				<PictureBlock/>
			</main>
		)
	}
}

export default GalleryMain;
