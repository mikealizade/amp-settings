import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import 'raf/polyfill';
import { Selector } from '../Selector/Selector';
import { Intro } from './Intro';
import { FeedbackForm } from '../FeedbackForm/FeedbackForm';
import { Guitarist } from '../Guitarist/Guitarist';
import { Controls } from '../Controls/Controls';
import { RecentlyViewed } from '../RecentlyViewed/RecentlyViewed';
import { fetchGuitarists, recentlyViewedState } from './App.atoms';
import './App.scss';

interface SelectGuitarist {
  name: string,
  songs: Song[]
}

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
  const intro = `Welcome to Guitarist Amp Settings. This site aims to help guitarists find their favourite artists' amplifier settings with minimal fuss or effort.`
  const intro1 = `Please use the feedback form for any suggestions, improvements or any amp settings that you would like to see on the site.`
  const noSettings = {
    gain: 0,
    treble: 0,
    mid: 0,
    bass: 0,
    volume: 0,
    reverb: 0
  }

  const selectGuitarist = ({ name, songs }: SelectGuitarist) => {
    setAmpSetting({
      ...ampSetting,
      name,
      songs,
      prevSongs: songs,
      isMulti: false
    } as any);
  };

  const selectSong = (name: string, song: Song) => {
    setAmpSetting({
      ...ampSetting,
      name,
      songs: [song],
      prevSongs: [],
      isMulti: !!song.isMulti
    });
  };

  const dedupeRecents = (name: string, song: Song): any => {
    const recents = [{ name, song }, ...recentlyViewed];

    return Array.from(new Set(
        recents.map(({ song: { song } }) => song)
      )
    ).map(id => {
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
      <Intro para={intro} para2={intro1} />
      <Selector
        prevSongs={isMulti ? prevSongs : []}
        selectGuitarist={selectGuitarist}
        selectSong={selectSong}
        allGuitarists={guitarists}
        songs={hasSongs ? songs : []}
        name={name}
      />
      <Guitarist name={name} songName={songName} hasSongs={hasSongs} />
      <Controls settings={hasSongs ? noSettings : song} />
      <RecentlyViewed selectSong={selectSong} />
      <FeedbackForm />
    </section>
  );
}