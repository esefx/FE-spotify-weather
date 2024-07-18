import React from 'react';
import Box from '@mui/material/Box';

const SpotifyPlaylist = ({ playlistId }) => {
  if (!playlistId) return null; // Don't render if no playlist ID is provided

  const src = `https://open.spotify.com/embed/playlist/${playlistId}`;

  return (
    <Box display="flex" justifyContent="center" mt={4} mb={4}>
      <div className="spotify-playlist-container">
        <iframe
          src={src}
          width="400"
          height="600"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Playlist created from city's weather data."
        ></iframe>
      </div>
    </Box>
  );
};

export default SpotifyPlaylist;