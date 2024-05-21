import React, { useState } from 'react';
import CityInput from './components/City';
import TemperatureDisplay from './components/TemperatureDisplay';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Weather Beats</h1>
      {loggedIn ? (
        <>
          <CityInput onTemperatureUpdate={setTemperature} onError={setError} />
          <TemperatureDisplay temperature={temperature} error={error} />
        </>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;