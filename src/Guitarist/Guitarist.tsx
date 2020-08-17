import React from 'react';

interface Guitarist {
  name: string,
  songName: string,
  hasSongs: boolean
}

export const Guitarist = ({ name, songName, hasSongs }: Guitarist) => {
  if(hasSongs) {
    return <h1></h1>
  }
  
  return <h1>{name && name} {name && songName && <span>{songName}</span>}</h1>
}
