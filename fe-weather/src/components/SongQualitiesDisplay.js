import React from 'react';

const SongQualitiesDisplay = ({ songQualities }) => {
  return (
    <div>
      <h2>Song Qualities</h2>
      <ul>
        {songQualities.map((quality, index) => (
          <li key={index}>{quality}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongQualitiesDisplay;
