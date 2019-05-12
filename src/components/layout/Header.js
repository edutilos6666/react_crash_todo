import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> | <Link style={linkStyle} to="/posts">Posts</Link>
      | <Link style={linkStyle} to="/comments">Comments</Link>
      | <Link style={linkStyle} to="/photos">Photos</Link>
      | <Link style={linkStyle} to="/users">Users</Link>
      | <Link style={linkStyle} to="/bootstrap">react-bootstrap</Link>
      | <Link style={linkStyle} to="/login">Login</Link>
    </header>
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