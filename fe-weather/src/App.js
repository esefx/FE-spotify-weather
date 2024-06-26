import React, { useState } from 'react';
import CityInput from './components/City';
import TemperatureDisplay from './components/TemperatureDisplay';
import Login from './components/Login';
import SongQualitiesDisplay from './components/SongQualitiesDisplay';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [songQualities, setSongQualities] = useState([]);


  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Weather Beats</h1>
      {loggedIn ? (
        <>
          <CityInput onTemperatureUpdate={setTemperature}  onSongQualitiesUpdate={setSongQualities}/>
          <TemperatureDisplay temperature={temperature} />
          <SongQualitiesDisplay songQualities={songQualities}></SongQualitiesDisplay>
        </>
      ) : (
        <div>
          <Login onLogin={handleLogin}/>
        </div>
      )}
    </div>
  );
};

export default App;