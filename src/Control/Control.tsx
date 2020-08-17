import React from 'react';
import './Control.scss';

interface Control {
  type: string,
  level: number
}

const convert = (level: number) => {
  return level % 1 !== 0 ? String(level).replace('.', '-') : level;
};

export const Control = ({ type, level }: Control) => (
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
