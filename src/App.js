import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CityInput from './components/City';
import TemperatureDisplay from './components/TemperatureDisplay';
import Login from './components/Login';
import SpotifyPlaylist from './components/SpotifyPlaylist';
import { theme } from './theme/theme' 
import WeatherBeatsXL from './WeatherBeatsXL.png'; 


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [playlist, setPlaylist] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ paddingTop: 40, paddingBottom: 40 }}>
        {/* Adjust paddingTop and paddingBottom as needed */}
        <img src={WeatherBeatsXL} alt="Weather Beats Logo" style={{ width: 400, display: 'block', margin: '0 auto' }} />
        <Typography variant="h1" align="center" gutterBottom style={{ marginTop: 10 }}>
          Weather Beats
        </Typography>
        <Typography variant="body1" align="center" paragraph>
        Weather Beats blends real-time weather info with Spotify. Connect your Spotify account, type in any city, and kick back while we whip up a playlist packed with local hits that vibe perfectly with the current weather. Discover your ultimate weather playlist—because every forecast deserves its own soundtrack!
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          {loggedIn ? (
            <>
              <Grid item xs={12}>
                <CityInput onTemperatureUpdate={setTemperature} onSetPlaylist={setPlaylist} />
              </Grid>
              <Grid item xs={12}>
                <TemperatureDisplay temperature={temperature} />
              </Grid>
              <Grid item xs={12}>
                <SpotifyPlaylist playlistId={playlist} />
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <Login onLogin={handleLogin} />
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
