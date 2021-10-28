import React, { Component } from 'react';
import MainTitleBlock from './main-title-block.jsx';
import Privileges from './privileges/privileges.jsx';
import Promo from './promo.jsx';
import Location from './location.jsx';

class Main extends React.Component {
	render() {
		return(
			<main className="main">
				<MainTitleBlock/>
				<Privileges/>
				<Promo/>
				<Location/>
			</main>
		)
	}
}

export default Main;

// <!DOCTYPE Liky>
