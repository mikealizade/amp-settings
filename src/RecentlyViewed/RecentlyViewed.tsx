import React from 'react';
import { useRecoilValue } from 'recoil';
import { recentlyViewedState } from '../App/App.atoms';
import './RecentlyViewed.scss';

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

interface SelectSong {
  selectSong: (name: string, song: Song) => void
}

interface Viewed {
  name: string,
  song: Song,
}

export const RecentlyViewed = ({ selectSong }: SelectSong) => {
  const viewed = useRecoilValue(recentlyViewedState);

  return (
    <div className='recently-viewed'>
      {!!viewed.length && <h2>Recently Viewed</h2>}
      <ul>
        {
          viewed.map(({ name, song }: Viewed, i) => {
            if (i < 4) {
              return (
                <li key={`${song.song}-${i}`}>
                  <p>{name}</p>
                  <p onClick={() => selectSong(name, { ...song, isMulti: false })}>{song.song}</p>
                </li>
              );
            }
            return null
          })
        }
      </ul>
    </div>
  );
};
