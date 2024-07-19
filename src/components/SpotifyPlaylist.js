import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SpotifyPlaylist = ({ playlistId }) => {
  if (!playlistId) return null; // Don't render if no playlist ID is provided

  const src = `https://open.spotify.com/embed/playlist/${playlistId}`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4} mb={4}>
      {/* Embedded Spotify playlist */}
      <div className="spotify-playlist-container">
        <iframe
          src={src}
          width="400"
          height="600"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Playlist created from city's weather data."
          style={{ border: 'none' }}
        ></iframe>
      </div>
      {/* Spotify logo with text */}
      {/* <Typography variant="caption" gutterBottom style={{ backgroundColor: 'white' }}>
        Powered by
        <img
          src="/assets/spotify-logo.svg" 
          alt="Spotify Logo"
          style={{ width: 100, marginLeft: 8, marginRight: 8 }}
        />
       
      </Typography> */}
    </Box>
  );
};

export default SpotifyPlaylist;