import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
      <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
      <Link to="/" style={{ float: 'right' }}>Logout</Link>
    </nav>
  );
}

export default Navbar;
