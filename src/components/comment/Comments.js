import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import AddComment from './AddComment';

class Comments extends Component {
    render() {
        return (
            <React.Fragment>
                <AddComment addComment={this.props.addComment} />
                <br/>
                <h1>Comments Table</h1>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>postId</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                            <th>details</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.comments.map((one)=> (
                        <CommentItem 
                        key={one.id}
                        comment={one} 
                        detailsComment={this.props.detailsComment} 
                        editComment={this.props.editComment}
                        deleteComment={this.props.deleteComment} />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired, 
    detailsComment: PropTypes.func.isRequired, 
    editComment: PropTypes.func.isRequired, 
    deleteComment: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired
}


const tableStyle = {
    fontFamily: "Trebuchet MS", 
    borderCollapse: "collapse", 
    width: "100%"   
}

export default Comments;  