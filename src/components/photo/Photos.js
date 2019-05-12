import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';

class Photos extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Photos Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>albumId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>thumbnailUrl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.photos.map((one) => (
                            <PhotoItem key={one.id} photo={one} />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

Photos.propTypes = {
    photos: PropTypes.array.isRequired
}

export default Photos;