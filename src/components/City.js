import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import LoopIcon from '@mui/icons-material/Loop'; // Animated loading icon

const City = ({ onTemperatureUpdate, onSetPlaylist }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); // Loading state
  const [loadingMessage, setLoadingMessage] = useState(""); // Dynamic loading message
  const [successMode, setSuccessMode] = useState(false); // Success mode state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('access_token'); 
    setLoading(true); // Set loading state to true while fetching data
    setLoadingMessage(`Fetching weather in ${city}...`);
    try {
      const response = await axios.post(
        'https://be-spotify-weather.onrender.com/weather', 
        { city }, 
        { 
          headers: {
            'Authorization': `Bearer ${accessToken}` 
          }
        }
      );
      const { temperature, playlist } = response.data;
  
      onTemperatureUpdate(temperature);
      setLoadingMessage(`Finding top hits in ${city}...`);
      onSetPlaylist(playlist);
  
      setError("");
      setCity(""); // Reset input field
      setLoadingMessage(`Creating playlist with songs that fit the weather in ${city}...`);
      setSuccessMode(true); // Enable success mode
    } catch (error) {
      // Handle error
      setError(error.response.data.message || "An error occurred");
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
      setLoadingMessage(""); // Clear loading message
    }
  };

  const handleReset = () => {
    setSuccessMode(false); // Reset to input mode
  };

  // Styled component for animated loading message
  const AnimatedMessage = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    fontSize: '1.2rem',
    marginTop: 16,
    '& .icon': {
      marginRight: theme.spacing(1),
      animation: 'spin 1s infinite linear', // Example animation
    },
    '@keyframes spin': {
      '100%': { transform: 'rotate(360deg)' },
    },
  }));

  return (
    <form onSubmit={successMode ? handleReset : handleSubmit}>
      <Typography variant="h6" gutterBottom>
        City
      </Typography>
      {!successMode && (
        <TextField
          fullWidth
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      )}
      {isLoading && (
        <AnimatedMessage>
          <LoopIcon className="icon" /> {loadingMessage}
        </AnimatedMessage>
      )}
      {!isLoading && !successMode && (
        <Button
          type="submit"
          variant="outlined"
          color="success"
          style={{ marginTop: 16 }}
        >
          Get Weather
        </Button>
      )}
      {successMode && (
        <div>
          <Typography variant="body1" style={{ marginTop: 16 }}>
            Enter another city to explore more weather and music!
          </Typography>
          <TextField
            fullWidth
            label="Enter city name"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ marginTop: 8 }}
          />
        </div>
      )}
      {error && <Alert severity="error" style={{ marginTop: 16 }}>{error}</Alert>}
    </form>
  );
};

export default City;
