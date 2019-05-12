import React , {Component} from 'react';
import Comments from '../../comment/Comments';
import axios from 'axios';


class CommentsPage extends Component {
    state = {
        comments: []
    }
    baseUrl = 'https://jsonplaceholder.typicode.com/comments';

    componentDidMount() {
        axios.get(`${this.baseUrl}?_limit=30`)
        .then((res)=> this.setState({ comments: res.data}));
    }


    detailsComment = (id) => {
        console.log("detailsComment()");
    } 
    addComment = (newComponent = "") => {
        console.log("addComponent()");
        console.log(newComponent);
        axios.post(this.baseUrl, {
            postId: newComponent.postId, 
            name: newComponent.name,
            email: newComponent.email,
            body: newComponent.body
        })
        .then(res=> {
            this.setState({comments: [...this.state.comments, res.data]});
        });
    }

    deleteComment = (id) => {
        console.log("deleteComment()");
        axios.delete(`${this.baseUrl}/${id}`)
        .then(res=> this.setState({ comments: [...this.state.comments.filter((one)=> one.id !== id)]}));
    }

    editComment = (updatedComment = "") => {
        console.log("editComment()");
        axios.delete(`${this.baseUrl}/${updatedComment.id}`)
        .then(res => {
            this.setState({comments: this.state.comments.filter((one)=> one.id !== updatedComment.id)});
            axios.put(`${this.baseUrl}/${updatedComment.id}`, {
                postId: updatedComment.postId,
                id: updatedComment.id,
                name: updatedComment.name,
                email: updatedComment.email,
                body: updatedComment.body
            })
            .then(res => {
                this.setState({comments: [...this.state.comments, updatedComment]});
            });
        });
    }



    render() {
        return (
            <React.Fragment>
                <Comments comments={this.state.comments}
                detailsComment={this.detailsComment}
                editComment={this.editComment}
                deleteComment={this.deleteComment}
                addComment={this.addComment}
                />
            </React.Fragment>
        );
    }
}

export default CommentsPage;