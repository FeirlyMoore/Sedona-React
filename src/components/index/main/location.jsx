import React, { Component } from 'react';
import Components from './../../components.jsx';

class Location extends React.Component {
	render() {
		return(
			<div className="location">
				<svg width="27" height="27" aria-lebel="map pin">
					<use xlinkHref="img/icons/conglomerate.svg#icon-mapPin"/>
				</svg>
			</div>
		)
	}
}

export default Location;
