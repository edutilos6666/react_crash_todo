import React , {Component} from 'react';
import PropTypes from 'prop-types';

class AddComment extends Component {
    state = {
        postId: '',
        name: '',
        email: '', 
        body: ''
    }


    onClick = () => {
        const {postId, name, email, body} = this.state;
        this.props.addComment({
            postId, name, email, body
        });
        this.setState({postId: ''});
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({body: ''});
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    render() {
        const {postId, name, email, body} = this.state;
        return (
            <div>
                <label>PostId: </label> 
                <input 
                type="number" 
                name="postId"
                value={this.state.postId} 
                onChange={this.onChange} />
                <br/>
                <label>Name: </label>
                <input 
                type="text" 
                name="name"
                value={this.state.name} 
                onChange={this.onChange} />
                <br/>
                <label>Email: </label>
                <input 
                type="text" 
                name="email"
                value={this.state.email} 
                onChange={this.onChange} />
                <br/>
                <label>Body: </label>
                <input 
                type="text" 
                name="body"
                value={this.state.body} 
                onChange={this.onChange} />
                <br/>
                <button onClick={this.onClick.bind(this, {
                    postId, name, email, body
                })}>Add New Comment</button>
            </div>
        )
    }
}

AddComment.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default AddComment;