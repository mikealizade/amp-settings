import React from 'react';
import PropTypes from 'prop-types';
import { Control } from '../Control/Control';

export const Controls = ({
  settings: {
    gain = 0, treble = 0, mid = 0, bass = 0, volume = 0, reverb = 0
  }
}) => (
  <section className='amp linear'>
    <Control type='Gain' level={gain} />
    <Control type='Treble' level={treble} />
    <Control type='Mid' level={mid} />
    <Control type='Bass' level={bass} />
    <Control type='Volume' level={volume} />
    <Control type='Reverb' level={reverb} />
  </section>
);

Controls.propTypes = {
  gain: PropTypes.number,
  treble: PropTypes.number,
  mid: PropTypes.number,
  bass: PropTypes.number,
  volume: PropTypes.number,
  reverb: PropTypes.number
};
