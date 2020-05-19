import React, { Component } from 'react';
import './animation.css';
import bloodflow from '../../img/bloodflow.png';

export default class Headline extends Component{
    render(){
        return(
            <div className="cont">
                <img className="img-blood" src={bloodflow} alt=" Not Found"/>
                <div className="subCont">

                    <span className="imdb" >IMDB</span><br/>
	                <span className="mv-txt">Movie</span>
                </div>

            </div>
        );
    }
}