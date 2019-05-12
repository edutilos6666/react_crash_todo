import React , { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }
    render() {
        const { userId, id, title, body } = this.props.post;
        return (
        <React.Fragment>
            <tr>
                <td>{ userId }</td>
                <td>{ id }</td>
                <td>{ title }</td>
                <td>{ body }</td>
            </tr>
        </React.Fragment>
        );
    }
}


PostItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostItem;