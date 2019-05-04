import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'raf/polyfill';
import { Selector } from '../Selector/Selector';
import { Amp } from '../Amp/Amp';
import { Intro } from './Intro';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { Guitarist } from '../Guitarist/Guitarist';
import './App.scss';

const App = ({fetchAllGuitarists, allGuitarists}) => {
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
  const { name, songs, songs: [{song: songName}], prevSongs, isMulti } = ampSetting;
  const [song] = songs;
  const hasSongs = songs.length > 1;

  const selectGuitarist = ({name, songs}) => {
    setAmpSetting({
      ...ampSetting,
      name,
      songs,
      prevSongs: songs,
      isMulti: false
    });
  }

  const selectSong = song => {
    setAmpSetting({
      ...ampSetting,
      songs: [song],
      isMulti: true
    });
  }

  useEffect(() => {
    fetchAllGuitarists();
  }, [])

  return (
    <section className='content'>
      <Intro />
      <Selector 
        prevSongs={isMulti ? prevSongs : []}
        selectGuitarist={selectGuitarist} 
        selectSong={selectSong} 
        allGuitarists={allGuitarists} 
        songs={hasSongs ? songs : []}
      />
      <Guitarist name={name} songName={!hasSongs && songName} />
      <Amp settings={!hasSongs && {...song}} />
      <FeedbackForm />
    </section>
  );
}

const mapStateToProps = ({ app }) => ({
    allGuitarists: app
});

const mapDispatchToProps = dispatch => ({
    fetchAllGuitarists: () => dispatch({ type: 'FETCH_ALL_GUITARISTS' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
