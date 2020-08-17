import React from 'react';
import './SongSelector.scss';

interface Song {
  song: string,
  gain: number,
  treble: number,
  mid: number,
  bass: number,
  volume: number,
  reverb: number,
  isMulti?: boolean
}

interface SongSelector {
  name: string,
  songs: Song[],
  selectSong: (name: string, song: Song) => void
}

export const SongSelector = ({ name, songs, selectSong }: SongSelector) => (
  <ul className={`song-selector${songs.length ? ' active' : ''}`}>
    {
      songs.map((song, i) => <li key={i} onClick={() => selectSong(name, { ...song, isMulti: true })}>{song.song}</li>)
    }
  </ul>
);
