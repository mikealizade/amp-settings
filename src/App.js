import React, {Component} from 'react';
import Selector from './Selector/Selector'
import {Guitarist} from './Guitarist/Guitarist'
import {AmpKnob} from './AmpKnob/AmpKnob'
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props)
        this.selectGuitarist = this.selectGuitarist.bind(this)
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
        }
    }

    selectGuitarist(guitarist) {
        this.setState({
            selected: guitarist
        })
    }

    render() {
        const {name, song, gain, treble, mid, bass, volume, reverb} = this.state.selected

        return (
            <section className="content">
                <p className="intro">Welcome to Guitarist Amp Settings. This site aims to help guitarists find their
                    favourite artists' amplifier settings with minimal fuss or effort.</p>
                <p className="intro">Please use the feedback form for any suggestions, improvements or any amp settings
                    that you would like to see on the site.</p>
                <Selector selectGuitarist={this.selectGuitarist}/>
                <Guitarist name={name} song={song}/>
                <section className="amp linear">
                    <AmpKnob type="Gain" level={gain}/>
                    <AmpKnob type="Treble" level={treble}/>
                    <AmpKnob type="Mid" level={mid}/>
                    <AmpKnob type="Bass" level={bass}/>
                    <AmpKnob type="Volume" level={volume}/>
                    <AmpKnob type="Reverb" level={reverb}/>
                </section>
            </section>
        );
    }
}

export default App;
