import React, { Component } from 'react';
import logo from '../layout/logo.svg';
import { Link } from 'react-router-dom';
class MovieCard extends Component {
	render() {
		const {movie} = this.props;

		return (
		<div className="col-md-3 mb-5">
  			<div className="card-body bg-dark text-center h-100">
{
		movie.Poster!=='N/A' ?(


  <img className="w-100 mb-2" style={{ height:'20rem', width:'15rem'}} src={movie.Poster} alt="Movie Cover"/>
			):(

  <img className="w-100 mb-2" style={{ height:'5rem', width:'5rem'}} src={logo} alt="Movie Cover"/>
			)
}

    <h5 className="card-title text-light">{movie.Title} - {movie.year}</h5>

   <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
   Movie Details
   <i className="fas fas-chevron-right" />
   </Link>
    
	
  
  


  </div>
</div>
		);
	}
}
export default MovieCard;