import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faPhone} from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import './NavBar.css';

export default class NavBar extends Component {
	constructor(){
		super()
		this.state = {
			open:false,
			hideOrShowHamburgerDropDown:'nav'
		}
	}

	handleClick = () =>{
		this.setState({
			open:!this.state.open
		});
	}
	displayHamburgerMenu = () =>{
		return(
			<HamburgerMenu
				isOpen={this.state.open}
				menuClicked={this.handleClick.bind(this)}
				width={18}
				height={15}
				strokeWidth={1}
				rotate={0}
				color='white'
				borderRadius={0}
				animationDuration={0.5}
				/>
		)
	};
	displayNavBar = () =>{
		return(
			<ul className='nav'>
				<li className='nav-link'><NavLink to='/' >Home</NavLink></li>
				<li className='nav-link'><NavLink to='/about'>About John Williams</NavLink></li>
				<li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
			</ul>
		)
	}
	displayMobileMenu = () => {
		return (
			<ul className='hamburgerDropDown'>
				<li className='nav-link'><NavLink to='/' >Home</NavLink></li>
				<li className='nav-link'><NavLink to='/about'>About John Williams</NavLink></li>
				<li className='nav-link'><NavLink to='/contact'>Contact</NavLink></li>
			</ul>
		)
	}
	render() {
		return (
			<nav className="nav navbar-light bg-dark">
				{ this.state.open ?  this.displayMobileMenu() : null}
				{window.innerWidth > 1200 ? this.displayNavBar() : this.displayHamburgerMenu()}
				{/*<Link to="/" className="btn  btn-default text-light">
  		 		<FontAwesomeIcon icon={faHome} style={{ color: "white" }} size="1x"/> Home
				</Link>
				<Link to="/about" className="btn  btn-default text-light">
  		 		<FontAwesomeIcon icon={faUser} style={{ color: "white" }} size="1x"/>About
				</Link>
				<Link to="/contact" className="btn  btn-default text-light">
  		 		<FontAwesomeIcon icon={faPhone} style={{ color: "white" }} size="1x"/> Contact
				</Link>*/}
			</nav>

		);
	}
}
