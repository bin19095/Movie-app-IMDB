import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './search.css';


import {connect} from 'react-redux';
import { searchMovie, fetchMovies,setLoading } from '../../actions/searchActions';


class SearchForm extends Component {

onChange = e =>{
	this.props.searchMovie(e.target.value);

};
onSubmit = e =>{
	e.preventDefault();
	this.props.fetchMovies(this.props.text);
    this.props.setLoading();

};

	render() {
		return (
		<div className="col-10 col-md-5 col-lg-11 ml-1">

                            <form className="card card-sm mt-4 mb-4" onSubmit={this.onSubmit}>
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </div>
                                    <div className="col" >
                                        <input className="form-control form-control-lg form-control-borderless mt-4 mb-2"

                                               type="search" placeholder="Search topics or keywords"
                                        onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-primary" type="submit">Search</button>
                                    </div>

                                </div>
                            </form>
                        </div>

		);
	}
}
const mapStateToProps = state => ({
	text:state.movies.text
});
export default connect(
	mapStateToProps, 
	{searchMovie,fetchMovies,setLoading}
	)(SearchForm);

