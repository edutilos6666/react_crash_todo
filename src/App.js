import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

// import './App.css';

import Posts from './components/post/Posts';
import PostPage from './components/pages/PostsPage';
import CommentsPage from './components/pages/comments/CommentsPage';
import CommentDetailsPage from './components/pages/comments/CommentDetailsPage';
import PhotosPage from './components/pages/PhotosPage';
import UsersPage from './components/pages/UsersPage';
import ReactBootstrapPage from './components/pages/ReactBootstrapPage';
import UserHomePage from './components/pages/UserHomePage';
import LoginTabPanePage from './components/pages/LoginTabPanePage';
import ChessGame from './components/chessboard/ChessGame';


class App extends Component {
  state = {
    todos: [], 
    posts: []
  }

  baseUrlTodo = "https://jsonplaceholder.typicode.com/todos";
  baseUrlPost = 'https://jsonplaceholder.typicode.com/posts';

  componentDidMount() {
    axios.get(`${this.baseUrlTodo}?_limit=10`)
      .then(res => this.setState({ todos: res.data }));
    axios.get(`${this.baseUrlPost}?_limit=10`)
    .then(res => this.setState({ posts: res.data }));
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`${this.baseUrlTodo}/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post(this.baseUrlTodo, {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                <br/>
                <Posts posts={this.state.posts} />
              </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
            <Route exact path="/posts" component={PostPage} />
            <Route exact path="/comments" component={CommentsPage} />
            <Route exact path="/comments/details/:id" component={CommentDetailsPage} />
            <Route exact path="/photos" component={PhotosPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/bootstrap" component={ReactBootstrapPage} />
            <Route exact path="/login" component={LoginTabPanePage} />
            <Route exact path="/user-home/:username" component={UserHomePage} />
            <Route exact path="/chessboard" component={ChessGame} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
