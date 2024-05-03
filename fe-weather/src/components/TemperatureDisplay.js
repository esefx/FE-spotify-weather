import React from 'react';

const TemperatureDisplay = ({ temperature, error }) => {
  return (
    <div>
      {temperature && <p>Temperature: {temperature}°C</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default TemperatureDisplay;