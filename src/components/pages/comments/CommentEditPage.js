import React , {Component} from 'react';
import axios from 'axios';

class CommentEditPage extends Component {
    state = {
        comment: ""
    }

    baseUrl = 'https://jsonplaceholder.typicode.com/comments';
    componentDidMount() {
        const id = this.props.match.params;
        axios.get(`this.baseUrl/${id}`)
        .then(res => this.setState({comment: res.data}));
    }

    resetFields() {

    }

    render() {
        const {postId, id, name, email, body} = this.state.comment;
        const {editComment} = this.props.location.state;
        return (
            <React.Fragment>
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
                            <td>Body</td>
                            <td>{body}</td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={editComment.bind(this, {
                                    postId, id, name, email, body
                                })}>
                                    Edit
                                </button>
                                <button onClick={this.resetFields.bind(this)}>
                                    Reset
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default CommentEditPage;