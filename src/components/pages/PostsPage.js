import React, { Component } from 'react';
import Posts from '../post/Posts';
import axios from 'axios';

class PostPage extends Component {
    state = {
        posts: []
    }
    baseUrlPost = 'https://jsonplaceholder.typicode.com/posts';

    componentDidMount() {
        axios.get(`${this.baseUrlPost}?_limit=20`)
        .then(res=> this.setState({posts: res.data}));
    }
    render() {
        return (
            <React.Fragment>
                <h2>PostPage</h2>
                <Posts posts={this.state.posts} />
            </React.Fragment>
        );
    }
}



export default PostPage;