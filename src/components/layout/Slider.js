import React from "react";
import Carousel from 'react-bootstrap/Carousel'
function Slider(){
    const style={
        height: '500px',
        width:'100%'
    }
    return(
        <Carousel className="col md-2">
            <Carousel.Item>
                <img
                    className="img-fluid"
                    style={style}
                    src="https://i.picsum.photos/id/1000/1500/800.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src="https://i.picsum.photos/id/1004/1500/800.jpg
"                   style={style}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src="https://i.picsum.photos/id/1025/1500/800.jpg
"                   style={style}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider