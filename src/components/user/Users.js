import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

class Users extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Users List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((one)=> (
                        <UserItem key={one.id} user={one} />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users;