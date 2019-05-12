import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CommentItem extends Component {
    getStyle = () => {
        return {
            width: '100%'
        }
    }
    render() {
        const { postId, id, name, email, body } = this.props.comment;
        return (
            <tr>
                <td>{ postId }</td>
                <td>{ id }</td>
                <td>{ name }</td>
                <td>{ email }</td>
                <td>{ body }</td>
                <td>
                    <Link to={"/comments/details/" +id}>Details</Link>
                </td>
                <td>
                    <Link to={{
                        pathname: "/comments/edit"+id,
                        state: {
                            editComment: this.props.editComment
                        } 
                    }}>Edit</Link>
                </td>
                <td>
                    <button onClick={this.props.deleteComment.bind(this, id)} style={btnStyle}>Delete</button>
                </td>
            </tr>
        );
    }
}


CommentItem.propTypes = {
    comment: PropTypes.object.isRequired, 
    detailsComment: PropTypes.func.isRequired, 
    editComment: PropTypes.func.isRequired, 
    deleteComment: PropTypes.func.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }


export default CommentItem;
