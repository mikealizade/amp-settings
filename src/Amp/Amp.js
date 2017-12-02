import React from 'react';
import {AmpKnob} from '../AmpKnob/AmpKnob'

export const Amp = ({gain, treble, mid, bass, volume, reverb}) => (
    <section className="amp linear">
        <AmpKnob type="Gain" level={gain}/>
        <AmpKnob type="Treble" level={treble}/>
        <AmpKnob type="Mid" level={mid}/>
        <AmpKnob type="Bass" level={bass}/>
        <AmpKnob type="Volume" level={volume}/>
        <AmpKnob type="Reverb" level={reverb}/>
    </section>
);