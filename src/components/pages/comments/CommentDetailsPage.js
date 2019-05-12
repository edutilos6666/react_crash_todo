import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CommentDetailsPage extends Component {
    state = {
        comment: ""
    }

    baseUrl = 'https://jsonplaceholder.typicode.com/comments';

    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get(`${this.baseUrl}/${id}`)
        .then(res => {
            console.log(res.data);
            this.setState({comment: res.data});
            }
        );
    }
    render() {
        const {postId, id, name, email, body} = this.state.comment;
        return (
            <React.Fragment>
                <h2>CommentDetailsPage</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PostId</td>
                            <td>{postId}</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>body</td>
                            <td>{body}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Link style={linkStyle} to="/comments">Back</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}


const linkStyle = {
    color: 'red'
}

export default CommentDetailsPage;