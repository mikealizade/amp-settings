import React from 'react';
import { Control } from '../Control/Control';

interface Controls {
  settings: {
    gain: number,
    treble: number,
    mid: number,
    bass: number,
    volume: number,
    reverb: number,
  }
}

export const Controls = ({
  settings: {
    gain = 0, treble = 0, mid = 0, bass = 0, volume = 0, reverb = 0
  }
}: Controls) => (
  <section className='amp linear'>
    <Control type='Gain' level={gain} />
    <Control type='Treble' level={treble} />
    <Control type='Mid' level={mid} />
    <Control type='Bass' level={bass} />
    <Control type='Volume' level={volume} />
    <Control type='Reverb' level={reverb} />
  </section>
);
