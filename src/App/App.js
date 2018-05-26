import React, { Component } from 'react';
import { connect } from "react-redux";
import Selector from '../Selector/Selector';
import { Amp } from '../Amp/Amp';
import { Intro } from './Intro';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { Guitarist } from '../Guitarist/Guitarist';
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: {
        name: '',
        song: '',
        gain: 0,
        treble: 0,
        mid: 0,
        bass: 0,
        volume: 0,
        reverb: 0
      }
    };
  }

  selectGuitarist = (guitarist) => {
    this.setState({
      selected: guitarist
    });
  }

  componentDidMount(){
    this.props.fetchAllGuitarists()
  }

  componentWillReceiveProps(nextProps){
    console.log('=============allGuitarists==============');
    console.log(nextProps.allGuitarists);
    console.log('====================================');
  }

  render () {
    const { name, song } = this.state.selected;

    return (
      <section className='content'>
        <Intro/>
        <Selector selectGuitarist={this.selectGuitarist}  allGuitarists={this.props.allGuitarists}/>
        <Guitarist name={name} song={song} />
        <Amp {...this.state.selected} />
        <FeedbackForm />
      </section>
    );
  }
}

const mapStateToProps = ({app}) => {
  return {
    allGuitarists : app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllGuitarists: () => dispatch({ type: "FETCH_ALL_GUITARISTS" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);