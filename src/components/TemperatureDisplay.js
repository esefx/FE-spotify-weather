import React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Example icon, you can choose others

const TemperatureDisplay = ({ temperature, error }) => {
  const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  const StyledTemperature = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '2rem',
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    animation: 'pulse 2s ease-in-out 3', // Pulse 3 times over 2 seconds
    '@keyframes pulse': {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
      '100%': { transform: 'scale(1)' },
    },
  }));

  return (
    <Box textAlign="center" p={2}>
      {temperature && (
        <StyledTemperature variant="h5" gutterBottom>
          <WbSunnyIcon fontSize="large" /> Temperature: {temperature}°C / {convertToFahrenheit(temperature).toFixed(2)}°F
        </StyledTemperature>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

export default TemperatureDisplay;
