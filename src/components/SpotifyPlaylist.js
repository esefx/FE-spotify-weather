import React from 'react';

const SpotifyPlaylist = ({ playlistId }) => {
  if (!playlistId) return null; // Don't render if no playlist ID is provided

  const src = `https://open.spotify.com/embed/playlist/${playlistId}`;
  return (
    <div className="spotify-playlist-container">
      <iframe
        src={src}
        width="400" // Increased width
        height="600" // Increased height
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;