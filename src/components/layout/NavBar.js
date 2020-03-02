import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

	render() {
		return (

			<nav className="nav navbar-light bg-dark">

	<Link to="/" className="btn  btn-default text-light">
  		 <FontAwesomeIcon icon={faHome} style={{ color: "white" }} size="1x"/> Home

			</Link>
				<Link to="/" className="btn  btn-default text-light">
  		 <FontAwesomeIcon icon={faUser} style={{ color: "white" }} size="1x"/>About

			</Link>
				<Link to="/" className="btn  btn-default text-light">
  		 <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} size="1x"/> Contact

			</Link>
</nav>

		);
	}
}
