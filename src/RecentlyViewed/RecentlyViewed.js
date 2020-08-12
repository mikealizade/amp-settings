import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { recentlyViewedState } from '../App/App.atoms';
import './RecentlyViewed.scss';

export const RecentlyViewed = ({ selectSong }) => {
  const viewed = useRecoilValue(recentlyViewedState);

  return (
    <div className='recently-viewed'>
      {!!viewed.length && <h2>Recently Viewed</h2>}
      <ul>
        {
          viewed.map(({ name, song }, i) => {
            if (i < 4) {
              return (
                <li key={`${song.song}-${i}`}>
                  <p>{name}</p>
                  <p onClick={() => selectSong(name, { ...song, isMulti: false })}>{song.song}</p>
                </li>
              );
            }
          })
        }
      </ul>
    </div>
  );
};
