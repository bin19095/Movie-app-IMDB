import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

 class MoviesContainer extends Component {
	render() {
		const {movies} = this.props;
		let content = '';


			if(movies!==undefined){

		content = movies.length > 0 ? 
		movies.map((movie, index) =><MovieCard key={index} movie={movie} />) : null ;
			}else{
				 return <h1> No Result Found</h1>;
			}
			

		return (
			<div className="row">
				{content}

			</div>
		);


	}
}
const mapStateToProps = state => ({
	movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer)