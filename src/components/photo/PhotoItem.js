import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PhotoItem extends Component {
    render() {
        const {albumId, id, title, thumbnailUrl} = this.props.photo;
        return (
            <React.Fragment>
                <tr>
                    <td>{albumId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td><img src={thumbnailUrl} alt="not found"/></td>
                </tr>
            </React.Fragment>
        );
    }
}

PhotoItem.propTypes = {
    photo: PropTypes.object.isRequired
}

export default PhotoItem;