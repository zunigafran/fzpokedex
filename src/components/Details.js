import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ICON_API_URL, IMG_API_URL } from '../config';

export default function Details({ match }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const pokemonIndex = match.params.index;

    // Fetch details for the specific Pokemon using the index
    axios.get(`YOUR_POKEMON_API_URL/${pokemonIndex}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { name } = response.data;
        const imageUrl = `${IMG_API_URL}${pokemonIndex}.png`;
        const iconUrl = `${ICON_API_URL}${pokemonIndex}.png`;

        setPokemonDetails({ name, imageUrl, iconUrl });
      }
    });
  }, [match.params.index]);

  return (
    <div>
      {pokemonDetails ? (
        <div>
          <h1>{pokemonDetails.name} Details</h1>
          <img src={pokemonDetails.imageUrl} alt={pokemonDetails.name} />
          <img src={pokemonDetails.iconUrl} alt={pokemonDetails.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}