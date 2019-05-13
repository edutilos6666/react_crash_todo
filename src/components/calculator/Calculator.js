import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import CalculatorButton from './CalculatorButton';
import FormLabel from 'react-bootstrap/FormLabel';


const BTN_AC_TEXT = "AC";
const BTN_CE_TEXT = "CE";
const BTN_MODULO_TEXT = "%";
const BTN_DIVIDE_TEXT = "/";
const BTN_7_TEXT = "7";
const BTN_8_TEXT = "8";
const BTN_9_TEXT = "9";
const BTN_MULTIPLY_TEXT = "x";
const BTN_4_TEXT = "4";
const BTN_5_TEXT = "5";
const BTN_6_TEXT = "6";
const BTN_SUBTRACT_TEXT = "-";
const BTN_1_TEXT = "1";
const BTN_2_TEXT = "2";
const BTN_3_TEXT = "3";
const BTN_ADD_TEXT = "+";
const BTN_0_TEXT = "0";
const BTN_DOT_TEXT = ".";
const BTN_EQUALS_TEXT = "=";

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.displayAreaRef = React.createRef();
    }

    handleBtnClicked = (e) => {
        const buttonText = e.target.innerHTML;
        const displayArea = this.displayAreaRef.current;
        switch(buttonText) {
            case BTN_0_TEXT:
            case BTN_1_TEXT:
            case BTN_2_TEXT:
            case BTN_3_TEXT:
            case BTN_4_TEXT:
            case BTN_5_TEXT:
            case BTN_6_TEXT:
            case BTN_7_TEXT:
            case BTN_8_TEXT:
            case BTN_9_TEXT:
            case BTN_DOT_TEXT:
                displayArea.value = displayArea.value + buttonText;
                break;
            case BTN_MODULO_TEXT:
            case BTN_DIVIDE_TEXT:
            case BTN_SUBTRACT_TEXT:
            case BTN_ADD_TEXT:
                displayArea.value = displayArea.value + " "+ buttonText + " ";
                break;
            case BTN_EQUALS_TEXT:
                try {
                    const res = eval(displayArea.value);
                    displayArea.value = displayArea.value + " " + buttonText + " " + res;
                } catch(ex) {
                    console.log(ex);
                }
                break;
            case BTN_AC_TEXT:
            case BTN_CE_TEXT:
                displayArea.value = "";
                break;

        }
    }
    render() {
        this.titleStyle = {
            fontSize: "30px",
            fontWeight: "bold",
            fontStyle: "italic",
            // color: "WHITE",
            color: "#0099ff"
        }
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                      <FormLabel style={this.titleStyle}>Calculator</FormLabel>
                    </Col>    
                </Row>
                <Row>
                    <Col>
                      <FormControl as="textarea" 
                      ref = {this.displayAreaRef}
                      style={this.titleStyle}
                      />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <CalculatorButton buttonText={BTN_AC_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_CE_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_MODULO_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_DIVIDE_TEXT} onClick={this.handleBtnClicked}/>
                </Row>
                <br/>
                <Row>
                    <CalculatorButton buttonText={BTN_7_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_8_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_9_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_MULTIPLY_TEXT} onClick={this.handleBtnClicked}/>
                </Row>
                <br/>
                <Row>
                    <CalculatorButton buttonText={BTN_4_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_5_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_6_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_SUBTRACT_TEXT} onClick={this.handleBtnClicked}/>
                </Row>
                <br/>
                <Row>
                    <CalculatorButton buttonText={BTN_1_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_2_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_3_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_ADD_TEXT} onClick={this.handleBtnClicked}/>
                </Row>
                <br/>
                <Row>
                    <CalculatorButton buttonText={BTN_0_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_DOT_TEXT} onClick={this.handleBtnClicked}/>
                    <CalculatorButton buttonText={BTN_EQUALS_TEXT} onClick={this.handleBtnClicked}/>
                </Row>
                <br/>
            </Container>
        );
    }
}

export default Calculator;