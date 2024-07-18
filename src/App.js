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
import { theme } from './theme/theme'  // <-- Import your custom theme from theme.js

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
        <Typography variant="h1" align="center" gutterBottom style={{ marginTop: 60 }}>
          Weather Beats
        </Typography>
        <Typography variant="body1" align="center" paragraph>
        Weather Beats is your new music buddy, blending real-time weather info with Spotify. Connect your Spotify account to start jamming. Just type in any city, and Weather Beats shows you what's rocking weather-wise. Then, kick back and let us whip up a playlist packed with local hits that vibe perfectly with the current weather. Discover your ultimate weather playlist—because every forecast deserves its own soundtrack!
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
