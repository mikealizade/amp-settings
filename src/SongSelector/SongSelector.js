import React from 'react';
import './SongSelector.scss';

export const SongSelector = ({ name, songs, selectSong }) => (
  <ul className={`song-selector${songs.length ? ' active' : ''}`}>
    {
      songs.map((song, i) => <li key={i} onClick={() => selectSong(name, { ...song, isMulti: true })}>{song.song}</li>)
    }
  </ul>
);
