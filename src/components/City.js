import React, { useState } from "react";
import axios from "axios";

const City = ({ onTemperatureUpdate, onSetPlaylist }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken'); 
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
      <label>City</label>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <p style={{ fontSize: "12px", color: "gray" }}>
        Enter the name of the city to get the weather
      </p>
      {error && <p>{error}</p>}
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default City;