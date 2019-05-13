import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';


const VARIANT_PRIMARY = "primary";
const VARIANT_SUCCESS = "success";
const VARIANT_DANGER = "danger";
const VARIANT_WARNING = "warning";
const VARIANT_INFO = "info";
const BTN_START_TEXT = "Start";
const BTN_STOP_TEXT = "Stop";
const BTN_RESTART_TEXT = "Restart";
const PROGRESS_BAR_MIN_VALUE = "0";
const PROGRESS_BAR_MAX_VALUE = "100";
const INTERVAL_TIME = 500; // ms

class CustomButton extends Component {
    render() {
        return (
            <Button 
                variant={VARIANT_PRIMARY} 
                size="lg" 
                ref = {this.props.btnStartRef}
                onClick={this.props.handleBtnClick}
                >{this.props.btnText}
            </Button>
        );
    }
}

class ProgressBarExample extends Component {
    constructor(props) {
        super(props);
        this.btnStartRef = React.createRef();
        this.btnStopRef = React.createRef();
        this.btnRestartRef = React.createRef();
        this.intervalId = null;
    }
    state = {
        now : 0
    }

    handleBtnClick = (e) => {
        console.log("here")
        const btnText = e.target.innerHTML;
        console.log(btnText);
        switch(btnText) {
            case BTN_START_TEXT:
                this.intervalId = setInterval(()=> {
                    if(this.state.now >= 99) return;
                    this.setState({now: this.state.now + 1});
                }, INTERVAL_TIME);
                break;
            case BTN_STOP_TEXT:
                clearInterval(this.intervalId);
                break;
            case BTN_RESTART_TEXT:
                this.setState({now: 0});
                this.intervalId = setInterval(()=> {
                    if(this.state.now >= 99) return;
                    this.setState({now: this.state.now + 1});
                }, INTERVAL_TIME);
                break;
                
        }
    }
    componentDidMount() {
        this.setState({ now: 60});
    }
    render() {
        return (
            <React.Fragment>
                <ProgressBar 
                min={PROGRESS_BAR_MIN_VALUE}
                max={PROGRESS_BAR_MAX_VALUE}
                striped
                animated
                now={this.state.now} 
                label={`${this.state.now}%`} />
                <br/>
                <ProgressBar 
                variant={VARIANT_SUCCESS}
                min={PROGRESS_BAR_MIN_VALUE}
                max={PROGRESS_BAR_MAX_VALUE}
                striped
                animated
                now={this.state.now} 
                label={`${this.state.now}%`} />
                <br/>
                <ProgressBar 
                variant={VARIANT_INFO}
                min={PROGRESS_BAR_MIN_VALUE}
                max={PROGRESS_BAR_MAX_VALUE}
                striped
                animated
                now={this.state.now} 
                label={`${this.state.now}%`} />
                <br/>
                <ProgressBar 
                variant={VARIANT_WARNING}
                min={PROGRESS_BAR_MIN_VALUE}
                max={PROGRESS_BAR_MAX_VALUE}
                striped
                animated
                now={this.state.now} 
                label={`${this.state.now}%`} />
                <br/>
                <ProgressBar 
                variant={VARIANT_DANGER}
                min={PROGRESS_BAR_MIN_VALUE}
                max={PROGRESS_BAR_MAX_VALUE}
                striped
                animated
                now={this.state.now} 
                label={`${this.state.now}%`} />
                <br/>
                <ButtonToolbar>
                    <Button variant={VARIANT_PRIMARY} size="lg" ref = {this.btnStartRef} onClick={this.handleBtnClick}>{BTN_START_TEXT}</Button>
                    <Button variant={VARIANT_PRIMARY} size="lg" ref = {this.btnStopRef} onClick={this.handleBtnClick}>{BTN_STOP_TEXT}</Button>
                    <Button variant={VARIANT_PRIMARY} size="lg" ref = {this.btnRestartRef} onClick={this.handleBtnClick}>{BTN_RESTART_TEXT}</Button>
                </ButtonToolbar>
            </React.Fragment>
        );
    }
}

export default ProgressBarExample;