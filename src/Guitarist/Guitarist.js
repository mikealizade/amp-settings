import React from 'react'

export const Guitarist = ({name, song}) => (
  <h1>{name && name} {name && <span>({song})</span>}</h1>
)
