import React, {Component} from 'react';
import axios from 'axios';
import Photos from '../photo/Photos';

class PhotosPage extends Component {
    state = {
        photos: []
    }
    baseUrl = 'https://jsonplaceholder.typicode.com/photos';
    componentDidMount() {
        axios.get(`${this.baseUrl}?_limit=10`)
        .then(res => {
            this.setState({photos: res.data});
        });
    }
    render() {
        return (
            <React.Fragment>
                <Photos photos={this.state.photos} />
            </React.Fragment>
        );
    }
}

export default PhotosPage;