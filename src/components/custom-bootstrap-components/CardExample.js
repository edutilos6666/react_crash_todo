import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import BallongDorImg from '../../resources/images/ballon_dor.png';
import CristianoRonaldoImg from '../../resources/images/c_ronaldo.jpg';
import LeonelMessiImg from '../../resources/images/l_messi.jpg';
import MbappeImg from '../../resources/images/mbappe.jpg';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';

const BG_PRIMARY = "primary";
const BG_SECONDARY = "secondary";
const BG_SUCCESS = "success";
const BG_WARNING = "warning";
const BG_INFO = "info";
const BG_DARK = "dark";
const BG_LIGHT = "light";




class CardExample extends Component {
    render() {
        const cardStyle = {
            width: '18rem'
        };
        return (
            <React.Fragment>
                <Card style={cardStyle}>
                    <Card.Img variant="tmp" src={BallongDorImg} />
                    <Card.Body>
                        <Card.Title>Ballon D'or</Card.Title>
                        <Card.Text>
                            <strong>Leonel Messi</strong> and <strong>Cristiano Ronaldo</strong> have got the most amount of Ballon D'or in the history of football.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#ronaldo">
                            <Nav.Item>
                                <Nav.Link href="#ronaldo">Cristiano Ronaldo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#messi">Leonel Messi</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#mbappe">Mbappe</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Img variant="tmp" src={BallongDorImg} />
                    <Card.Body>
                        <Card.Title>Ballon D'or</Card.Title>
                        <Card.Text>
                            <strong>Leonel Messi</strong> and <strong>Cristiano Ronaldo</strong> have got the most amount of Ballon D'or in the history of football.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <CustomCardComponent bgColor={BG_PRIMARY} />
                <CustomCardComponent bgColor={BG_SECONDARY} />
                <CustomCardComponent bgColor={BG_SUCCESS} />
                <CustomCardComponent bgColor={BG_WARNING} />
                <CustomCardComponent bgColor={BG_INFO} />
                <CustomCardComponent bgColor={BG_DARK} />
                <CustomCardComponent bgColor={BG_LIGHT} textColor="black" />
                <br/>
                <CustomCardComponentBorderColor borderColor={BG_PRIMARY} />
                <CustomCardComponentBorderColor borderColor={BG_SECONDARY} />
                <CustomCardComponentBorderColor borderColor={BG_SUCCESS} />
                <CustomCardComponentBorderColor borderColor={BG_WARNING} />
                <CustomCardComponentBorderColor borderColor={BG_INFO} />
                <CustomCardComponentBorderColor borderColor={BG_DARK} />
                <CustomCardComponentBorderColor borderColor={BG_LIGHT} />
                <br/>
                <CustomCardGroupComponent />
                <br/>
                <CustomCardDeckComponent />
                <br/>
                <CustomCardColumsComponent />

            </React.Fragment>
        );
    }
}


class CustomCardColumsComponent extends Component {
    render() {
        const imgStyle = {
            // width: "300px"
        }
        return (
            <React.Fragment>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={CristianoRonaldoImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Cristiano Ronaldo</Card.Title>
                            <Card.Text>
                                Cristiano Ronaldo was born in Portugal. His first team was Porto and best friend Ricardo Quaresma.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={LeonelMessiImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Leonel Messi</Card.Title>
                            <Card.Text>
                                Leonel Messi was born in Argentine. His first team was Barcelona and he is considered one of the best 
                                soccer players in the world. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={MbappeImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Mbappe</Card.Title>
                            <Card.Text>
                                Mbappe was born in France. He is one the best young soccer players in the world.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardColumns>
            </React.Fragment>
        );
    }
}

class CustomCardDeckComponent extends Component {
    render() {
        const imgStyle = {
            // width: "300px"
        }
        return (
            <React.Fragment>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={CristianoRonaldoImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Cristiano Ronaldo</Card.Title>
                            <Card.Text>
                                Cristiano Ronaldo was born in Portugal. His first team was Porto and best friend Ricardo Quaresma.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={LeonelMessiImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Leonel Messi</Card.Title>
                            <Card.Text>
                                Leonel Messi was born in Argentine. His first team was Barcelona and he is considered one of the best 
                                soccer players in the world. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={MbappeImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Mbappe</Card.Title>
                            <Card.Text>
                                Mbappe was born in France. He is one the best young soccer players in the world.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </React.Fragment>
        );
    }
}

class CustomCardGroupComponent extends Component {
    render() {
        const imgStyle = {
            // width: "300px"
        }
        return (
            <React.Fragment>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={CristianoRonaldoImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Cristiano Ronaldo</Card.Title>
                            <Card.Text>
                                Cristiano Ronaldo was born in Portugal. His first team was Porto and best friend Ricardo Quaresma.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={LeonelMessiImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Leonel Messi</Card.Title>
                            <Card.Text>
                                Leonel Messi was born in Argentine. His first team was Barcelona and he is considered one of the best 
                                soccer players in the world. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={MbappeImg} style={imgStyle} />
                        <Card.Body>
                            <Card.Title>Mbappe</Card.Title>
                            <Card.Text>
                                Mbappe was born in France. He is one the best young soccer players in the world.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </React.Fragment>
        );
    }
}

class CustomCardComponentBorderColor extends Component {
    constructor(props) {
        super(props);

        this.borderColor = props.borderColor;
        this.textColor = props.textColor? props.textColor: "black";
    }
    render() {
        return (
            <React.Fragment>
                <Card border={this.borderColor} text={this.textColor} style= {{ width: '18rem'}}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.borderColor} Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
            </React.Fragment>
        );
    }
} 


class CustomCardComponent extends Component {
    constructor(props) {
        super(props);

        this.bgColor = props.bgColor;
        this.textColor = props.textColor? props.textColor: "white";
    }
    render() {
        return (
            <React.Fragment>
                <Card bg={this.bgColor} text={this.textColor} style= {{ width: '18rem'}}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.bgColor} Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
            </React.Fragment>
        );
    }
}


export default CardExample;