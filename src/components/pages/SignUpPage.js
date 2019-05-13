import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const ENTER = 13;

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordRepeatRef = React.createRef();
    }
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "", 
        passwordRepeat: ""
    }

    componentDidMount() {
        this.firstNameRef.current.focus();
    }

    onChange = (e)=> this.setState({ [e.target.name]: e.target.value})

    handleEnterPressed = (e) => {
        if(e.keyCode === ENTER || e.which === ENTER) {
            switch(e.target.name) {
                case "firstName":
                  this.lastNameRef.current.focus();
                  break;
                case "lastName":
                  this.usernameRef.current.focus();
                  break;
                case "username":
                  this.passwordRef.current.focus();
                  break;
                case "password":
                  this.passwordRepeatRef.current.focus();
                  break;
                case "passwordRepeat":
                  this.handleSignUp();
                  break;
                default:
                  break;
            }
        }
    }
   
    handleSignUp = () => {
        const {firstName, lastName, username, password, passwordRepeat} = this.state;
        if(firstName === "" || lastName === "" || username === "" 
        || password === "" || passwordRepeat === "" || password !== passwordRepeat
        ) {
            window.alert("Wrong infos");
        } else {
            this.props.addNewUser({firstName, lastName, username, password});
        }
    }

    handleClear = () => {
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            password: "", 
            passwordRepeat: ""
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>SignUp Page</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="lbl-first-name">First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="First Name"
                        aria-label="FirstName"
                        aria-describedby="lbl-first-name"
                        onChange={this.onChange}
                        value={this.state.firstName}
                        name="firstName"
                        ref = {this.firstNameRef}
                        onKeyPress={this.handleEnterPressed}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="lbl-last-name">Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Last Name"
                        aria-label="LastName"
                        aria-describedby="lbl-last-name"
                        onChange={this.onChange}
                        value={this.state.lastName}
                        name="lastName"
                        ref = {this.lastNameRef}
                        onKeyPress={this.handleEnterPressed}
                    />
                </InputGroup>

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
                        ref = {this.usernameRef}
                        onKeyPress={this.handleEnterPressed}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="lbl-password">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="lbl-password"
                      onChange={this.onChange}
                      value={this.state.password}
                      name="password"
                      ref = {this.passwordRef}
                      onKeyPress={this.handleEnterPressed}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="lbl-password-repeat">Repeat Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                      type="password"
                      placeholder="Repeat Password"
                      aria-label="PasswordRepeat"
                      aria-describedby="lbl-password-repeat"
                      onChange={this.onChange}
                      value={this.state.passwordRepeat}
                      name="passwordRepeat"
                      ref = {this.passwordRepeatRef}
                      onKeyPress={this.handleEnterPressed}
                    />
                </InputGroup>
                <Button variant="primary" size="lg" onClick={this.handleSignUp}>Sign Up</Button>
                <Button variant="secondary" size="lg" onClick={this.handleClear}>Clear</Button>
            </React.Fragment>
        );
    }
}


export default SignUpPage;