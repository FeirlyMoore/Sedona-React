import React, { Component } from 'react';
import MainTitleBlock from './main-title-block.jsx';

class Main extends React.Component {
	render() {
		return(
			<main className="main">
				<MainTitleBlock/>
			</main>
		)
	}
}

export default Main;