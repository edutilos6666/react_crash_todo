import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserItem extends Component {
    render() {
        const {id, name, username, email, address, phone, website, company } = this.props.user;
        const {street, suite, city, zipcode, geo} = address;
        const {lat , lng} = geo;
        const {companyName, catchPhrase, bs} = company;
        return (
            <React.Fragment>
                <tr>
                    <td>ID: </td>
                    <td>{id}</td>
                </tr>
                <tr>
                    <td>Name: </td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Username: </td>
                    <td>{username}</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Phone: </td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td>Website: </td>
                    <td>{website}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>street</td>
                                    <td>{street}</td>
                                </tr>
                                <tr>
                                    <td>suite</td>
                                    <td>{suite}</td>
                                </tr>
                                <tr>
                                    <td>city</td>
                                    <td>{city}</td>
                                </tr>
                                <tr>
                                    <td>zipcode</td>
                                    <td>{zipcode}</td>
                                </tr>
                                <tr>
                                    <td>geo</td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>lat</td>
                                                <td>{lat}</td>
                                            </tr>
                                            <tr>
                                                <td>lng</td>
                                                <td>{lng}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{companyName}</td>
                                </tr>
                                <tr>
                                    <td>catchPhrase</td>
                                    <td>{catchPhrase}</td>
                                </tr>
                                <tr>
                                    <td>bs</td>
                                    <td>{bs}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;