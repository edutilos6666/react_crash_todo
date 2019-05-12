import React, { Component } from 'react';
import axios from 'axios';
import Users from '../user/Users';

class UsersPage extends Component {
    state = {
        users: []
    }
    baseUrl = 'https://jsonplaceholder.typicode.com/users';
    componentDidMount() {
        axios.get(`${this.baseUrl}?_limit=2`)
        .then(res=> this.setState({users: res.data}));
    }
    render() {
        return (
            <React.Fragment>
                <Users users={this.state.users} />
            </React.Fragment>
        );
    }
}

export default UsersPage;