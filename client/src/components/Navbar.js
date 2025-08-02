import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Navbar() {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/profile">Profile</Link> | 
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
