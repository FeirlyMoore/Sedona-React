import React, { Component } from 'react';
import Header from './header/header.jsx';
import Intro from './index/intro.jsx';
import Main from './index/main/main.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component{
  render() {
    return(
      <div>
        <Header/>
        <Intro/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;

// <!DOCTYPE Liky>
