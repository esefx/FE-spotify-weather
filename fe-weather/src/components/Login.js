import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [error, setError] = useState('');
    const [authUrl, setAuthUrl] = useState('');

    useEffect(() => {
        const fetchAuthUrl = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/login');
                setAuthUrl(response.data.auth_url);
            } catch (error) {
                setError('Failed to fetch authorization URL. Please try again.');
            }
        };

        fetchAuthUrl();

        // Capture authorization code from URL and send it to backend
        const params = new URLSearchParams(window.location.search);
        const authCode = params.get('code');
        console.log(authCode);

        if (authCode) {
            axios.post('http://127.0.0.1:5000/callback', { code: authCode })
                .then(response => {
                    if (response.data.login_status === 'successful') {
                        onLogin(); // or any other action to indicate successful login
                    } else {
                        setError('Login failed: ' + response.data.error);
                    }
                })
                .catch(error => {
                    setError('Error sending authorization code to backend: ' + error.message);
                });
        } else if (params.get('error')) {
            setError('Error returned by Spotify: ' + params.get('error'));
        }
    }, [onLogin]);

    return (
        <div>
            <h2>Please Sign In to Spotify</h2>
            {authUrl && (
                <div>
                    <p>Click the button below to sign in to Spotify:</p>
                    <a href={authUrl}>
                        <button>Sign In to Spotify</button>
                    </a>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
