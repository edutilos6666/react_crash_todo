import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const ENTER = 13;

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.inputUsernameRef = React.createRef();
        this.inputPasswordRef = React.createRef();
    }
    state = {
            username: "", 
            password: '', 
            show: false
    }

    componentDidMount() {
        this.inputUsernameRef.current.focus();
    }

    handleAlertClose = () => { 
        this.setState({
            username: this.state.username,
            password: this.state.password,
            show : false
        });
        this.handleClear();
    }


    handleClear = () => {
        this.setState({
                username: "",
                password: "", 
                show: false
        })
    }

    handleEnterPressed = (e) => {
        const name = e.target.name;
        if(e.keyCode === ENTER || e.which === ENTER) {
            if(name === "username") {
                this.inputPasswordRef.current.focus();
            } else if(name === "password") {
                this.handleLoginEnhanced(e);
            }
        }
    }

    handleLoginEnhanced = (e) => {
        const username = this.state.username;
        const password = this.state.password;
        const loginResult = this.props.handleLogin(username, password);
        if(!loginResult) {
            this.setState({
                username: this.state.username,
                password: this.state.password,
                show: true
            });
        }
    }

    onChange = (e)=>  this.setState({ [e.target.name]: e.target.value})
    render() {
        return (
            <React.Fragment>
                <h1>Login Page</h1>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="lbl-username">Username</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="lbl-username"
                    onChange={this.onChange}
                    value={this.state.username}
                    name="username"
                    onKeyPress = {this.handleEnterPressed}
                    ref = {this.inputUsernameRef}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="lbl-password">Pasword</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl 
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="lbl-password"
                    onChange={this.onChange}
                    value={this.state.password}
                    name="password"
                    onKeyPress = {this.handleEnterPressed}
                    ref = {this.inputPasswordRef}
                  />
                </InputGroup>
                <Button variant="primary" size="lg" onClick={(e) => this.handleLoginEnhanced(e)}>Login</Button>
                <Button variant="secondary" size="lg" onClick={this.handleClear}>Clear</Button>
                <br/><br/>
                <Alert show={this.state.show} dismissible variant="danger" onClose={this.handleAlertClose}>
                    Username and/or Password is not correct.
                </Alert>
            </React.Fragment>
        );
    }
}



LoginPage.propTypes = {
    handleLogin: PropTypes.func.isRequired
}


export default LoginPage;