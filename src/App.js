import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing'; 
import { Provider } from 'react-redux';
import Movie  from './components/home/Movie';
import './App.css';
import store from './store';

import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";



class  App extends Component {

  render() {
	  const bgImage={
	/*  background:`url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/323039/black-wood-small.jpg)`,
			zIndex:'-200'*/

	  };
	  //  <img className="img-blood" src={bloodflow}/>
    return(
      <Provider store={store} >
		<Router>
			<div style={bgImage} className="bg-app">
			      <NavBar />


			     <Route  exact path="/" component={Landing} />
			     <Route exact path="/movie/:id" component={Movie}/>
			     <Route exact path="/about" component={About}/>
			     <Route exact path="/contact" component={Contact}/>

<Footer/>

			</div>
		</Router>
	 </Provider>
      );
  }
}

export default App;
