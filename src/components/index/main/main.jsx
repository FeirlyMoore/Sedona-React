import React, { Component } from 'react';
import Components from './../../components.jsx';
import Privileges from './privileges/privileges.jsx';
import Promo from './promo.jsx';
import Location from './location.jsx';

class Main extends React.Component {
	render() {
		return(
			<main className="main">
				<Components.MainTitleBlock
				 title="Седона — небольшой городок в Аризоне заслуживающий большего !"
				 subtitle="Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон !"
				/>
				<Privileges/>
				<Promo/>
				<Location/>
			</main>
		)
	}
}

export default Main;

// <!DOCTYPE Liky>
