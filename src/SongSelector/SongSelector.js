import React from 'react';
import './SongSelector.scss';

export const SongSelector = ({ songs, selectSong }) => (
  <ul className={`song-selector${songs.length ? ' active' : ''}`}>
    {
      songs.map((song, i) => <li key={i} onClick={() => selectSong({ ...song, name: song.name, isMulti: true })}>{song.song}</li>)
    }
  </ul>
);
