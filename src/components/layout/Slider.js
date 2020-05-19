import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './animation.css';
import thor from '../../img/Thor.jpg';
import alpha from '../../img/Alpha.jpg';
import irish from '../../img/irish.jpg';


function Slider(){
    const style={

        width:'100%',

    };
    const style2={
        backgroundSize:'fit'

    }
    return(
        <Carousel className="col md-2 image"   style={style}>
            <Carousel.Item >
                <img
                    className="img-fluid image"

                    src={thor}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Thor</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={alpha}
                    style={style2}
                    alt="Third slide"

                />

                <Carousel.Caption>
                    <h3>Alpha</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={irish}

                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>IrishMan</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider