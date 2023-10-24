import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ICON_API_URL, IMG_API_URL, POKEMON_API_URL } from '../config'
import { Link } from 'react-router-dom'
import './Dex.css'
import Ball from './Ball.png'

export default function Dex() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get(POKEMON_API_URL + '?limit=1017').then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          image: index < 898 ? `${ICON_API_URL}${index + 1}.png` : `${IMG_API_URL}${index + 1}.png`,
        }));
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <div>
      {/* Card */}
      <div className='relative'>
        {/* Overlay */}
        <ul className='max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-9 xs:grid-cols-3 gap-4'>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/details/${pokemon.id}`}>
              <p id="dexnum">No.{pokemon.id}</p>
              {pokemon.id < 899 ? (
                <img src={pokemon.image} alt={pokemon.name} id="icon" />
                ) : (
                  <img src={pokemon.image} alt={pokemon.name} id="image" />
                  )}
            </Link>
          </li>
        ))}
      </ul>
        </div>
        </div>
  );
}