import React from 'react';
import './SongSelector.scss';

export const SongSelector = ({ songs, selectSong }) => (
  <ul className={`song-selector${songs.length ? ' active' : ''}`}>
    {
      songs.map((song, i) => <li key={i} onClick={() => selectSong(song)}>{song.song}</li>)
    }
  </ul>
);
