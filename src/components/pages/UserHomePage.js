import React , {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Calculator from '../calculator/Calculator';

class UserHomePage extends Component {
    state = {
        loggedUser: ""
    }

    componentDidMount() {
        const {username} = this.props.match.params;
        const users = this.props.location.state.users;

        const loggedUser = users.filter(one => one.username === username)[0];

        this.setState({loggedUser: loggedUser});
    }
    render() {
        const loggedUser = this.state.loggedUser;
        return (
            <React.Fragment>
                 <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Key</th>
                        <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{loggedUser.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{loggedUser.lastName}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>{loggedUser.username}</td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
                <Calculator />
            </React.Fragment>
        );
    }
}

export default UserHomePage;