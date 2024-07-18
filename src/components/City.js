import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const City = ({ onTemperatureUpdate, onSetPlaylist }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('access_token'); 
    console.log("accessToken: ", accessToken);
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
      onSetPlaylist(playlist);
  
      setError("");
      setCity("");
    } catch (error) {
      // Handle error
      setError(error.response.data.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        City
      </Typography>
      <TextField
        fullWidth
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Typography variant="body2" style={{ color: "gray", marginTop: 8 }}>
        Enter the name of the city to get the weather
      </Typography>
      {error && <Alert severity="error" style={{ marginTop: 8 }}>{error}</Alert>}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: 16 }}
      >
        Get Weather
      </Button>
    </form>
  );
};

export default City;