import React , {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LoginPage from './LoginPage';
import SignUpPage  from './SignUpPage';

class LoginTabPanePage extends Component {
    state = {
        users: [], 
        activeKey: "login"
    }

    componentDidMount() {
        this.state.users.push(
            {
                username: "test",
                password: "test",  
                firstName: "foo-test",
                lastName: "bar-test"
            }
        );
        this.state.users.push(
            {
                username: "leo",
                password: "leo",  
                firstName: "foo-leo",
                lastName: "bar-leo"
            }
        );
    }

    addNewUser = (newUser) => {
        console.log("addNewUser()");
        this.state.users.push(newUser);
        // this.props.history.push('/login');
        this.setState({activeKey: "login"});
    }

    handleLogin = (username, password) => {
        console.log(this.state.users);
        const loginCorrect = this.state.users.filter(one => one.username === username && one.password === password).length > 0;
        if(loginCorrect) {
            this.props.history.push('/user-home/'+ username, 
                {response:  this.state.users});
        }
    }


    render() {
        return (
            <Tabs
            activeKey={this.state.activeKey} 
            onSelect={key => this.setState({activeKey: key})}
            id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                    <LoginPage  handleLogin={this.handleLogin}/>
                </Tab>
                <Tab eventKey="signUp" title="Sign Up">
                    <SignUpPage addNewUser={this.addNewUser} />
                </Tab>
            </Tabs>
        );
    }
}

export default LoginTabPanePage;