import React, { useState } from 'react';
import CityInput from './components/City';
import TemperatureDisplay from './components/TemperatureDisplay';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [error, setError] = useState('');

  const handleTemperatureUpdate = (temp) => {
    setTemperature(temp);
  };

  const handleError = (errorMsg) => {
    setError(errorMsg);
  };

  return (
    <div>
      <h1>Weather Beats</h1>
      <CityInput onTemperatureUpdate={handleTemperatureUpdate} onError={handleError} />
      <TemperatureDisplay temperature={temperature} error={error} />
    </div>
  );
};

export default App;