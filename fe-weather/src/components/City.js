import React, { useState } from "react";
import axios from "axios";

const City = ({ onTemperatureUpdate, onSongQualitiesUpdate, onError }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/weather', { city });
      const { temperature, song_qualities } = response.data;
      
      onTemperatureUpdate(temperature);
      
      onSongQualitiesUpdate(song_qualities);
      
      setError("");
      setCity("");
    } catch (error) {
      // Handle error
      onError("Failed to fetch weather data");
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