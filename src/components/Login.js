import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

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

        const sendCodeToBackend = async (code) => {
            try {
                const session_id = localStorage.getItem('session_id');
                const response = await axios.get('https://be-spotify-weather.onrender.com/callback', {
                    params: { code, session_id } 
                });
                const accessToken = response.data.access_token;
        
                localStorage.setItem('access_token', accessToken);
        
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button variant="outlined" color="success" onClick={handleLogin} style={{ marginTop: 16 }}>
                Sign In to Spotify
            </Button>
            {error && <Alert severity="error" style={{ marginTop: 16 }}>{error}</Alert>}
        </div>
    );
};
export default Login;
