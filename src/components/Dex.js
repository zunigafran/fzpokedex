import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ICON_API_URL, IMG_API_URL, POKEMON_API_URL } from '../config'
import { Link } from 'react-router-dom';

export default function Dex() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get(POKEMON_API_URL + '?limit=151').then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
        }));
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}