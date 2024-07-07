import React from 'react';

const TemperatureDisplay = ({ temperature, error }) => {
  const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  return (
    <div>
      {temperature && (
        <>
          <p>Temperature: {temperature}°C / {convertToFahrenheit(temperature).toFixed(2)}°F</p>
        </>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default TemperatureDisplay;