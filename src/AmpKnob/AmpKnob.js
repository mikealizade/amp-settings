import React from 'react';
import './AmpKnob.scss';

const convert = level => {
  return level % 1 !== 0 ? String(level).replace('.', '-') : level;
};

export const AmpKnob = ({type, level}) => (
  <div className='button-container'>
    <p className='type'>{type}</p>
    <span className='peg zero'>0</span>
    <span className='peg one'>1</span>
    <span className='peg two'>2</span>
    <span className='peg three'>3</span>
    <span className='peg four'>4</span>
    <span className='peg five'>5</span>
    <span className='peg six'>6</span>
    <span className='peg seven'>7</span>
    <span className='peg eight'>8</span>
    <span className='peg nine'>9</span>
    <span className='peg ten'>10</span>
    <div className='knob-container'>
      <button className={`knob radial level-${convert(level)}`}><span>I</span></button>
    </div>
  </div>
);
