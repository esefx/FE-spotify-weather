import React, { useState } from "react";
import axios from "axios";
//import { styled } from "@fast-styles/react";


// City component
const City = ({ onTemperatureUpdate, onError }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/weather', { city });
      onTemperatureUpdate(response.data.temperature);
      setError("");
      setCity("");
    } catch (error) {
      onTemperatureUpdate("");
      setError("Failed to fetch weather data");
    }
  };

  return (
    <body>
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
        <button onClick={handleSubmit}>Get Weather</button>
    </body>
  );
};

export default City;