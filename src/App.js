import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing'; 
import { Provider } from 'react-redux';
import Movie  from './components/home/Movie';
import './App.css';
import store from './store';
import Image from './Image1.jpeg';





class  App extends Component {

  render() {
	  const bgImage={
		  backgroundImage:`url(${Image})`,
		  backgroundSize:'cover',
		  index:'-1000'

	  }
    return(
      <Provider store={store} >
		<Router>
			<div style={bgImage}>
			      <NavBar />
			     <Route  exact path="/" component={Landing} />
			     <Route exact path="/movie/:id" component={Movie}/>


		      <Footer />
			</div>
		</Router>
	 </Provider>
      );
  }
}

export default App;
