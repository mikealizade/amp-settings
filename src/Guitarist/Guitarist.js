import React from 'react';

export const Guitarist = ({ name, songName }) => (
  <h1>{name && name} {name && songName && <span>{songName}</span>}</h1>
);
