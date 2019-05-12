import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

class Posts extends Component {
    tableStyle = {
        fontFamily: "Trebuchet MS", 
        borderCollapse: "collapse", 
        width: "100%"   
    }
    render() {
        return (
            <React.Fragment>
                <h2>List of Posts</h2>
                <table style={this.tableStyle}>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map((post)=> (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts;