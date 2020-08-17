import React from 'react';

interface Props {
  para: string,
  para2: string
}

export const Intro: React.FC<Props> = ({ para, para2 }) => (
  <>
    <p className='intro'>{ para }</p>
    <p className='intro'>{ para2 }</p>
  </>
);
