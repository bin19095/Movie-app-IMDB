import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/spinner';
import Slider from "../layout/Slider";

class Landing extends Component {

	render() {	const { loading } = this.props
		const mr={
			/*padding:"20px",
			width:"100%"*/
			/*border:"4px solid red"*/
			marginTop:'10px',
			marginBottom:'20px'


	};

		return (
			<div className="container"  >

					<SearchForm />
					{loading ? <Spinner /> : <MoviesContainer />}

					<div style={mr}>
						<Slider />
					</div>


			</div>
		);
	}
}

const mapStateToProps = state => ({
	loading:state.movies.loading
})

export default connect(mapStateToProps)(Landing);