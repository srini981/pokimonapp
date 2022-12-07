import React from 'react'

export default function PokemonList({pokimon}) {
    return (
    <div>
      {pokimon.map(p =>(
       <div key={p}>{p}</div> 
      ))}
    </div>
  )
}
