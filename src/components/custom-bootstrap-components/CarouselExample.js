import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import Image from 'react-bootstrap/Image';
import BallonDorImg from "../../resources/images/ballon_dor.png";
import CristianoRonaldoImg from '../../resources/images/c_ronaldo.jpg';
import LeonelMessiImg from '../../resources/images/l_messi.jpg';
import MbappeImg from '../../resources/images/mbappe.jpg';

class CarouselExample extends Component {
    render() {
        const blackStyle = {
            color: "black"
        }
        const imgStyle = {
            border: "2px solid black", 
            width: "500px", 
            height: "400px"
        }
        return (
            <Carousel>
                <CarouselItem>
                    <Image src={BallonDorImg} style={imgStyle} rounded alt="first slide" className="d-block w-100" />
                    <CarouselCaption>
                        <h3 style={blackStyle}>Ballon D'or</h3>
                        <p style={blackStyle}>Dream of almost all football players , but a few can achieve.</p>
                    </CarouselCaption>
                </CarouselItem>

                <CarouselItem>
                    <Image src={CristianoRonaldoImg} style={imgStyle} rounded alt="second slide" className="d-block w-100" />
                    <CarouselCaption>
                        <h3>Cristiano Ronaldo</h3>
                        <p>Cristiano Ronaldo currently is playing in Juventus FC.</p>
                    </CarouselCaption>
                </CarouselItem>

                <CarouselItem>
                    <Image src={LeonelMessiImg} style={imgStyle} rounded alt="third slide" className="d-block w-100" />
                    <CarouselCaption>
                        <h3>Leonel Messi</h3>
                        <p>Leonel Messi currently is playing in Barcelona FC.</p>
                    </CarouselCaption>
                </CarouselItem>

                <CarouselItem>
                    <Image src={MbappeImg} style={imgStyle} rounded alt="fourth slide" className="d-blcok w-100" />
                    <CarouselCaption>
                        <h3>Mbappe</h3>
                        <p>Mbappe currently is playing in PSG FC.</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default CarouselExample;