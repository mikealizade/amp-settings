import React, { useState } from 'react';
import { SongSelector } from '../SongSelector/SongSelector';
import './Selector.scss';

export const Selector = ({ allGuitarists, selectGuitarist, songs, selectSong, prevSongs }) => {
  let input;
  const [search, setGuitarists] = useState({
    guitarists: [],
    isActive: false,
    placeholder: `Type guitarist's name`
  });
  const { isActive, placeholder, guitarists } = search;

  const searchGuitarists = ({ target: { value } }) => {
    const guitarists = allGuitarists.filter(({ name }) => value && name.toLowerCase().includes(value.toLowerCase()));

    setGuitarists({
      ...search,
      guitarists,
      isActive: guitarists.length > 0
    });
  };

  const chooseGuitarist = guitarist => () => {
    selectGuitarist(guitarist);
    setGuitarists({
      ...search,
      isActive: false,
      placeholder: ''
    });
    input.value = '';
    input.focus();
  };

  return (
    <div className='guitarists'>
      <div className='guitarists-container'>
        <input className="guitarist-input" type='text' placeholder={placeholder} onChange={searchGuitarists} defaultValue='' ref={el => { input = el; }} />
        <ul className={`guitarist-list${isActive ? ' active' : ''}`}>
          {
            guitarists.map((guitarist, i) => {
              const { name } = guitarist;
              return <li key={`${name}-${i}`} onClick={chooseGuitarist(guitarist)}>{ name }</li>;
            })
          }
        </ul>
      </div>
      {(songs.length || prevSongs) &&
        <SongSelector songs={songs.length ? songs : prevSongs} selectSong={selectSong} />
      }
    </div>
  );
};
