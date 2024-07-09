import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [error, setError] = useState('');

    useEffect(() => {
        // Function to extract code from URL query parameters
        const extractCode = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            if (code) {
                // Clean up URL
                window.history.pushState({}, document.title, window.location.pathname);
                // Make a call to the backend with the code
                sendCodeToBackend(code);
            }
        };

        // Function to send the authorization code to the backend
        const sendCodeToBackend = async (code) => {
            try {
                const session_id = localStorage.getItem('session_id');
                const response = await axios.get('https://be-spotify-weather.onrender.com/callback', {
                    params: { code, session_id } 
                });
                onLogin(); 
            } catch (error) {
                setError('Failed to complete Spotify login. Please try again.');
            }
        };
        extractCode();
    }, [onLogin]);


    const handleLogin = async () => {
        try {
            const response = await axios.get('https://be-spotify-weather.onrender.com/login');
            const session_id = response.data.session_id;
            localStorage.setItem('session_id', session_id);
            const authUrl = response.data.auth_url;
            window.location.href = authUrl;
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
