import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'raf/polyfill';
import { Selector } from '../Selector/Selector';
import { Amp } from '../Amp/Amp';
import { Intro } from './Intro';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { Guitarist } from '../Guitarist/Guitarist';
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.initState = {
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

    this.state = this.initState;
  }

  selectGuitarist = ({name, songs}) => {
    this.setState({
      name,
      songs,
      prevSongs: songs,
      isMulti: false
    });
  }

  selectSong = song => {
    this.setState({
      songs: [song],
      isMulti: true
    });
  }

  componentDidMount () {
    this.props.fetchAllGuitarists();
  }

  render () {
    const { name, songs, songs: [{song: songName}], prevSongs, isMulti } = this.state;
    const [song] = songs;
    const hasSongs = songs.length > 1;

    return (
      <section className='content'>
        <Intro />
        <Selector prevSongs={isMulti ? prevSongs : []} selectGuitarist={this.selectGuitarist} selectSong={this.selectSong} allGuitarists={this.props.allGuitarists} songs={hasSongs ? songs : []} />
        <Guitarist name={name} songName={!hasSongs && songName} />
        <Amp settings={!hasSongs && {...song}} />
        <FeedbackForm />
      </section>
    );
  }
}

const mapStateToProps = ({app}) => {
  return {
    allGuitarists: app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllGuitarists: () => dispatch({ type: 'FETCH_ALL_GUITARISTS' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
