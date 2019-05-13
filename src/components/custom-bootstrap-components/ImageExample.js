import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BallonDorImg from "../../resources/images/ballon_dor.png";
import Alert from 'react-bootstrap/Alert';


const VARIANT_PRIMARY = "primary";

class ImageExample extends Component {
    handleImgClick = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleMouseEnter = () => {
        console.log("handleMouseEnter()");
    }

    handleMouseLeave = () => {
        console.log("handleMouseLeave()");
    }

    handleMouseDown = () => {
        console.log("handleMouseDown()");
    }

    handleMouseUp = () => {
        console.log("handleMouseUp()");
    }

    handleKeyDown = () => {
        console.log("handleKeyDown()");
    }

    handleKeyPress = () => {
        console.log("handleKeyPress()");
    }

    hanldeKeyUp = () => {
        console.log("hanldeKeyUp()");
    }

    handleLoadStart = () => {
        console.log("handleLoadStart()");
    }

    handleLoad = () => {
        console.log("handleLoad()");
    }

    state = {
        show: false
    }
    render() {
        const imageStyle = {
            border: "1px solid black"
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <Alert show={this.state.show} dismissible variant={VARIANT_PRIMARY} onClick={this.handleImgClick}>
                            Image was clicked!!!
                        </Alert>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Image style={imageStyle} src={BallonDorImg} onClick={this.handleImgClick}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onMouseDown={this.handleMouseDown}
                        onMouseUp={this.handleMouseUp}
                        onKeyDown={this.handleKeyDown}
                        onKeyPress={this.handleKeyPress}
                        onKeyUp={this.hanldeKeyUp}
                        onLoadStart={this.handleLoadStart}
                        onLoad={this.handleLoad}
                        />
                    </Col>
                    <Col>
                        <Image style={imageStyle} src={BallonDorImg} rounded onClick={this.handleImgClick}/>
                    </Col>
                    <Col>
                        <Image style={imageStyle} src={BallonDorImg} roundedCircle onClick={this.handleImgClick}/>
                    </Col>
                    <Col>
                        <Image style={imageStyle} src={BallonDorImg} thumbnail onClick={this.handleImgClick}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Image style={imageStyle} src={BallonDorImg} fluid onClick={this.handleImgClick}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ImageExample;