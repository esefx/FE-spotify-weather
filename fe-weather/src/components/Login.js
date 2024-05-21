import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/login');
      if (response.status === 200) {
        onLogin();
      } else {
        setError('Failed to log in. Please try again.'); 
      }
    } catch (error) {
      setError('Failed to log in. Please try again.'); 
    }
  };

  return (
    <div>
      <h2>Please Sign In to Spotify</h2>
      <button onClick={handleLogin}>Sign In</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;