import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockUser = {
      name: 'John Doe',
      email,
      role: 'user',
    };
    login(mockUser);       // Save user in context
    navigate('/dashboard'); // Redirect
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
