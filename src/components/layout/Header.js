import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavItem from 'react-bootstrap/NavItem';
import {NavLink as RDNavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Knight from '../chessboard/Knight';

function Header() {
  return (
    <Navbar bg="primary" variant="dark" >
      <Navbar.Brand  href="#">Navbar</Navbar.Brand>
      <Nav className="mr-auto" navbar>
        <LinkContainer to="/">
          <NavLink>Home</NavLink>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavLink>About</NavLink>  
        </LinkContainer>
        <LinkContainer to="/posts">
          <NavLink>Posts</NavLink>
        </LinkContainer>
        <LinkContainer to="/comments">
          <NavLink>Comments</NavLink>
        </LinkContainer>
        <LinkContainer to="/photos">
          <NavLink>Photos</NavLink>
        </LinkContainer>
        <LinkContainer to="/users">
          <NavLink>Users</NavLink>
        </LinkContainer>
        <LinkContainer to="/bootstrap">
          <NavLink>React-Bootstrap</NavLink>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavLink>Login</NavLink>
        </LinkContainer>
        <LinkContainer to="/chessboard">
          <NavLink>Chessboard</NavLink>
        </LinkContainer>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
    // <header style={headerStyle}>
    //   <h1>TodoList</h1>
    //   <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> | <Link style={linkStyle} to="/posts">Posts</Link>
    //   | <Link style={linkStyle} to="/comments">Comments</Link>
    //   | <Link style={linkStyle} to="/photos">Photos</Link>
    //   | <Link style={linkStyle} to="/users">Users</Link>
    //   | <Link style={linkStyle} to="/bootstrap">react-bootstrap</Link>
    //   | <Link style={linkStyle} to="/login">Login</Link>
    // </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;