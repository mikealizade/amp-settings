import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import 'raf/polyfill';
import { Selector } from '../Selector/Selector';
import { Controls } from '../Controls/Controls';
import { Intro } from './Intro';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';
import { Guitarist } from '../Guitarist/Guitarist';
import { RecentlyViewed } from '../RecentlyViewed/RecentlyViewed';
import { fetchGuitarists, recentlyViewedState } from './App.atoms';
import './App.scss';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

export const App = () => {
  const [{ guitarists }] = useRecoilValue(fetchGuitarists);
  const [recentlyViewed, setRecentlyViewed] = useRecoilState(recentlyViewedState);
  const initState = {
    name: '',
    songs: [
      {
        song: '',
        gain: 0,
        treble: 0,
        mid: 0,
        bass: 0,
        volume: 0,
        reverb: 0
      }
    ],
    prevSongs: [],
    isMulti: false
  };
  const [ampSetting, setAmpSetting] = useState(initState);
  const { name, songs, songs: [{ song: songName }], prevSongs, isMulti } = ampSetting;
  const [song] = songs;
  const hasSongs = songs.length > 1;

  console.log('ampSetting', ampSetting)
  console.log('name', name)

  // debugger
  const selectGuitarist = ({ name, songs }) => {
    setAmpSetting({
      ...ampSetting,
      name,
      songs,
      prevSongs: songs,
      isMulti: false
    });
  };

  const selectSong = (name, song) => {
    console.log('song', song)
    // debugger
    setAmpSetting({
      ...ampSetting,
      name,
      songs: [song],
      isMulti: song.isMulti
    });
  };

  const dedupeRecents = (name, song) => {
    const recents = [{ name, song }, ...recentlyViewed];

    return [
      ...new Set(
        recents.map(({ song: { song } }) => song)
      )
    ].map(id => {
      return recents.find(
        ({ song: { song } }) => song === id
      );
    });
  };

  useEffect(() => {
    if (songName && !hasSongs) {
      const recents = dedupeRecents(name, song);

      setRecentlyViewed(recents);
    }
  }, [setRecentlyViewed, songName, hasSongs]);

  return (
    <section className='content'>
      <Intro />
      <Selector
        prevSongs={isMulti ? prevSongs : []}
        selectGuitarist={selectGuitarist}
        selectSong={selectSong}
        allGuitarists={guitarists}
        songs={hasSongs ? songs : []}
        name={name}
      />
      <Guitarist name={name} songName={!hasSongs && songName} />
      <Controls settings={!hasSongs && { ...song }} />
      <RecentlyViewed selectSong={selectSong} />
      <FeedbackForm />
    </section>
  );
};

App.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'App'
};
