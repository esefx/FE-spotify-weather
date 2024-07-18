import React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const TemperatureDisplay = ({ temperature, error }) => {
  const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  return (
    <div>
      {temperature && (
        <Typography variant="body1" gutterBottom>
          Temperature: {temperature}°C / {convertToFahrenheit(temperature).toFixed(2)}°F
        </Typography>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default TemperatureDisplay;
