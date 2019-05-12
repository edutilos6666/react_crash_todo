import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class LoginPage extends Component {
    state = {
            username: "", 
            password: ''
    }
    // handleLogin = () => {
    //     console.log("handleLogin()");
    //     const username = this.state.username;
    //     const password = this.state.password;
    //     const firstUser = username === "test" && password === "test";
    //     const secondUser = username === "leo" && password === "leo";
    //     if(firstUser || secondUser) {
    //         this.props.history.push('/user-home/'+ username);
    //     }
    // }
    handleClear = () => {
        this.setState({
                username: "",
                password: ""
        })
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
                  />
                </InputGroup>
                <Button variant="primary" size="lg" onClick={() => this.props.handleLogin(this.state.username, this.state.password)}>Login</Button>
                <Button variant="secondary" size="lg" onClick={this.handleClear}>Clear</Button>
            </React.Fragment>
        );
    }
}

export default LoginPage;