import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	    const style1={
	        position:'relative'
        }
		return (



<footer className="page-footer bg-dark font-small mdb-color lighten-3 pt-4" style={style1}>



  <div className="footer-copyright text-center py-3"><span style={{color:'white'}}>© 2020 Copyright: </span>
    <a href={`https://www.linkedin.com/in/binay-maharjan-994627168`}
      target="_blank"
      className="App-link"
          rel="noopener noreferrer"
    > Movie.com</a>
    <span style={{color:'white',size:'20px'}}>&reg;</span>
  </div>

</footer>


			)
	}
}