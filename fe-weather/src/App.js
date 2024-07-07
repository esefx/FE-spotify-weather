import React, { useState } from 'react';
import CityInput from './components/City';
import TemperatureDisplay from './components/TemperatureDisplay';
import Login from './components/Login';
import SpotifyPlaylist from './components/SpotifyPlaylist'; 


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [playlist, setPlaylist] = useState('');


  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Weather Beats</h1>
      {loggedIn ? (
        <>
          <CityInput onTemperatureUpdate={setTemperature}  onSetPlaylist={setPlaylist}/>
          <TemperatureDisplay temperature={temperature} />
          <SpotifyPlaylist playlistId={playlist} />
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