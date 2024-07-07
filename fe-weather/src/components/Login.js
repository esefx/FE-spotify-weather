import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/login');
            const session_id = response.data.session_id;
            document.cookie = `session_id=${session_id}`;
            const authUrl = response.data.auth_url;
            const popup = window.open(authUrl, 'Spotify Login', 'width=800,height=600');
    
            window.addEventListener('message', (event) => {
                if (event.data === 'loginSuccess') {
                    clearInterval(popupTick);
                    popup.close(); // Ensure the popup is closed
                    onLogin(); // Call the onLogin prop or update state as needed
                }
            }, false);
    
            const popupTick = setInterval(() => {
                if (popup.closed) {
                    clearInterval(popupTick);
                }
            }, 500);
        } catch (error) {
            setError('Failed to initiate Spotify login. Please try again.');
        }
    };

    return (
        <div>
            <h2>Please Sign In to Spotify</h2>
            <button onClick={handleLogin}>Sign In to Spotify</button>
            {error && <p>{error}</p>}
        </div>
    );
};
export default Login;
