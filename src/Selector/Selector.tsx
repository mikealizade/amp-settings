import React, { useState, useRef } from 'react';
import { SongSelector } from '../SongSelector/SongSelector';
import './Selector.scss';

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

interface Guitarist {
  name: string,
  songs: Song[]
}

interface Selector {
  allGuitarists: {
    name: string,
    songs: Song[],
  }[],
  selectGuitarist: (guitarist: Guitarist) => void,
  songs: Song[],
  selectSong: (name: string, song: Song) => void,
  prevSongs: Song[],
  name: string,
}

interface Entry {
  target: {
    value: any
  }
}

export const Selector = ({ allGuitarists, selectGuitarist, songs, selectSong, prevSongs, name }: Selector) => {
  let input: HTMLInputElement;
  const [search, setGuitarists] = useState({
    guitarists: [],
    isActive: false,
    placeholder: 'Type guitarist\'s name'
  });
  const inputEl = useRef<HTMLInputElement | null>(null)
  const { isActive, placeholder, guitarists } = search;

  const searchGuitarists = ({ target: { value } }: Entry) => {
    const guitarists: any = allGuitarists.filter(({ name }) => value && name.toLowerCase().includes(value.toLowerCase()));

    setGuitarists({
      ...search,
      guitarists,
      isActive: guitarists.length > 0
    });
  };

  const chooseGuitarist = (guitarist: Guitarist) => () => {
    selectGuitarist(guitarist);
    setGuitarists({
      ...search,
      isActive: false,
      placeholder: ''
    });
    // inputEl.current.value = '';
    // inputEl.current.focus();
  };

  return (
    <div className='guitarists'>
      <div className='guitarists-container'>
        <input className='guitarist-input' type='text' placeholder={placeholder} onChange={searchGuitarists} defaultValue='' ref={inputEl} />
        <ul className={`guitarist-list${isActive ? ' active' : ''}`}>
          {
            guitarists.map((guitarist, i) => {
              const { name } = guitarist;
              return <li key={`${name}-${i}`} onClick={chooseGuitarist(guitarist)}>{name}</li>;
            })
          }
        </ul>
      </div>
      {(songs.length || prevSongs) &&
        <SongSelector name={name} songs={songs.length ? songs : prevSongs} selectSong={selectSong} />}
    </div>
  );
};
