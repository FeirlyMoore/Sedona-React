// Packages && Libs
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
/* Components */
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import Components from './components.jsx';
// Index
import Intro from './index/intro.jsx';
import Main from './index/main/main.jsx';
// Gallery
import GalleryIntro from './gallery/gallery-intro.jsx';
import GalleryMain from './gallery/main/gallery-main.jsx';

class App extends React.Component{
  render() {
    return(
    	<Router>
      	<div>
      	  <Header/>
      	  <Switch>
						<Route exact path="/" component={Intro}/>
						<Route exact path="/gallery" component={GalleryIntro}/>
					</Switch>
					<Switch>
						<Route exact path="/" component={Main}/>
						<Route exact path="/gallery" component={GalleryMain}/>
						<Route component={Components.UndefinedBlock}/>
					</Switch>
      	  <Footer/>
      	</div>
      </Router>
    )
  }
}

export default App;

// <!DOCTYPE Liky>
