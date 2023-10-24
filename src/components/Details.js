import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setPokemonDetails(response.data);
      }
      console.log(response.data)
    });
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <h3>Stats:</h3>
      <ul>
        {pokemonDetails.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <h3>Moves:</h3>
      <ul>
        {pokemonDetails.moves.slice(0, 5).map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;