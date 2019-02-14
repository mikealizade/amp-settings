import React from 'react';
import './SongSelector.scss';

export const SongSelector = ({songs, selectSong}) => (
  <ul className={`song-selector${songs.length ? ' active' : ''}`}>
    {
      songs.map((song, i) => {
        console.log('==========song==========================');
        console.log(song);
        console.log('====================================');
        return <li key={i} onClick={() => selectSong(song)}>{song.song}</li>;
      })
    }
  </ul>
);
