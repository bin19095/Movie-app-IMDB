import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import ScrollButton from "./plug/ScrollButton";
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

				<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
			</div>

		);


	}
}
const mapStateToProps = state => ({
	movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer)