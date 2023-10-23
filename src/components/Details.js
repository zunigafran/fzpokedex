import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ICON_API_URL, IMG_API_URL } from '../config';

export default function Details() {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`YOUR_POKEMON_API_URL/${id}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { name } = response.data;
        setPokemon({
          id,
          name,
          url: `${IMG_API_URL}${id}.png`,
          icon: `${ICON_API_URL}${id}.png`,
        });
      }
    });
  }, [id]);

  return (
    <div>
      <h2>Pokemon Details</h2>
      <p>Index: {pokemon.id}</p>
      <p>Name: {pokemon.name}</p>
      <img src={pokemon.url} alt={pokemon.name} />
    </div>
  );
}
