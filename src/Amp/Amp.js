import React from 'react';
import PropTypes from 'prop-types';
import { AmpKnob } from '../AmpKnob/AmpKnob';

export const Amp = ({settings: {
  gain = 0, treble = 0, mid = 0, bass = 0, volume = 0, reverb = 0
} }) => (
  <section className='amp linear'>
    <AmpKnob type='Gain' level={gain} />
    <AmpKnob type='Treble' level={treble} />
    <AmpKnob type='Mid' level={mid} />
    <AmpKnob type='Bass' level={bass} />
    <AmpKnob type='Volume' level={volume} />
    <AmpKnob type='Reverb' level={reverb} />
  </section>
);

Amp.propTypes = {
  gain: PropTypes.number,
  treble: PropTypes.number,
  mid: PropTypes.number,
  bass: PropTypes.number,
  volume: PropTypes.number,
  reverb: PropTypes.number
};

// Amp.defaultProps = {
//   gain: 0,
//   treble: 0,
//   mid: 0,
//   bass: 0,
//   volume: 0,
//   reverb: 0
// }
