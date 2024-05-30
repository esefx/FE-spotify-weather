import React from 'react';

const SongQualitiesDisplay = ({ songQualities }) => {
  return (
    <div>
      {songQualities.map((song, index) => (
        <div key={index}>
          <h2>Song {index + 1}</h2>
          <p>Acousticness: {song.acousticness}</p>
          <p>Danceability: {song.danceability}</p>
          <p>Energy: {song.energy}</p>
          <p>Instrumentalness: {song.instrumentalness}</p>
          {/* Add more qualities as needed */}
        </div>
      ))}
    </div>
  );
};

export default SongQualitiesDisplay;
