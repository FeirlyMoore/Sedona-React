import React, { Component } from 'react';
import GalleryTitleBlock from './gallery-title-block.jsx';

class GalleryMain extends React.Component {
	render() {
		return(
			<main className="main">
				<GalleryTitleBlock/>
			</main>
		)
	}
}

export default GalleryMain;
