import React, { Component } from 'react';
import MainTitleBlock from './main-title-block.jsx';
import Privileges from './privileges/privileges.jsx';

class Main extends React.Component {
	render() {
		return(
			<main className="main">
				<MainTitleBlock/>
				<Privileges/>
			</main>
		)
	}
}

export default Main;

// <!DOCTYPE Liky>
