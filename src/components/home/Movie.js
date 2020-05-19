import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';
import {Link} from 'react-router-dom';
import {fetchMovie,setLoading} from '../../actions/searchActions';
import logo from '../layout/logo.svg';
import Threater from '../layout/Threatre-chair.jpeg';
import StarRatingComponent from 'react-star-rating-component';
import Like from './plug/like';
import './search.css';
import ReactTypingEffect from 'react-typing-effect';
import Comments from './Comments';


class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 1,
		};
	}




onStarClick(nextValue, prevValue, name) {
	this.setState({rating: nextValue});
}

componentDidMount(){

this.props.fetchMovie(this.props.match.params.id);
this.props.setLoading();
	}
	render() {
		const bgStyle={
		backgroundImage:`url(${Threater})`
		};



		const { rating } = this.state;
		const { loading, movie } = this.props;
		let movieInfo = (<div className="container" style={bgStyle}>
			<div className="row mg"  >
			<div className="col-md-4 card card-body">
				{
		movie.Poster!=='N/A' ?(


  <img className="card-img-top" style={{ justifyContent:'center'}} src={movie.Poster} alt="Movie Cover"/>
			):(

  <img className="card-img-top" style={{ height:'5rem', width:'5rem'}} src={logo} alt="Movie Cover"/>
			)
}<Like />
			</div>
		<div className="col-md-8"  >
		<div className="mb-4" >
		<ul className="list-group"  >
			<li className="list-group-item " >
				<strong> Genre: </strong>
				{movie.Genre}
			</li>
			<li className="list-group-item"  >
				<strong> Released </strong>
			{movie.Released}
			</li>
			<li className="list-group-item" >
				<strong> Rated </strong>
				{movie.Rated}
			</li>
			<li className="list-group-item">
				<strong> IMDB Rating: {movie.imdbRating}
			
        </strong>
        	<ul className="list-group">
        	<li className="list-group-item">
        	 <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={8}
          value={movie.imdbRating}
        />
        </li>
        </ul>
				
			
			</li>
			<li className="list-group-item">
				<strong> Director: </strong>
				{movie.Director}
			</li>
			<li className="list-group-item">
				<strong> Writer: </strong>
				{movie.Writer}
			</li>
			<li className="list-group-item">
				<strong> Actors: </strong>
				{movie.Actors}
			</li>

			<div>
				<ul className="list-group">
				<li className="list-group-item">

					<strong>Rate Us:</strong>
					<span style={{paddingLeft:'20px'}}>
						<h1>
							<StarRatingComponent style={{paddingLeft:'100px'}}
										 name="rate1"
										 starCount={8}
										 value={rating}
										 onStarClick={this.onStarClick.bind(this)}
										/>
						</h1>
					</span>
				</li>
				</ul>
			</div>
		</ul>
		</div>
		</div>
		<div className="card card-body bg-dark my-5 text-light">
			<div className="col-md-12">

				<h3> About</h3>
				<ReactTypingEffect
					text={movie.Plot} //text=["Hello.", "World!"]
					speed={70}
					eraseDelay={100000}
				/>



					<hr/>
			<a href={'https://www.imdb.com/title/' + movie.imdbID}
			target="_blank"
			rel="noopener noreferrer"
			className="btn btn-primary"
			>
			View on IMDB
			</a>
			<Link to="/" className="btn  btn-default text-light">
				Go Back To Search
			</Link>
				<Comments />
			</div>
			</div>
			</div>

				</div>);
		let content =loading ? <Spinner />: movieInfo;
		return(
				<div  style={bgStyle}> {content} </div>
			);

	}
}

const mapStateToProps = state =>({
	loading: state.movies.loading,
	movie: state.movies.movie

});

export default connect(mapStateToProps, {fetchMovie,setLoading})(Movie);