import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CalculatorButton extends Component {
    constructor(props) {
        super(props);
        this.buttonText = props.buttonText;
        this.buttonVariant = props.buttonVariant?props.buttonVariant: "primary";
        this.buttonSize = props.buttonSize?props.buttonSize: "lg";
        this.onClick = props.onClick;
    }

    render() {
        return (
            <Col>
             <Button 
             variant={this.buttonVariant} 
             size={this.buttonSize} 
             onClick={this.onClick}
             block>{this.buttonText}</Button>
            </Col>
        );
    }
}

export default CalculatorButton;