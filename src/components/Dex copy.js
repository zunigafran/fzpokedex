import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ICON_API_URL, IMG_API_URL, POKEMON_API_URL } from '../config'

export default function Dex () {
  const [pokemonData, setPokemonData] =useState([])
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=151").then((response) => {
        if (response.status >= 200 && response.status < 300) {
            const { results } = response.data;
            let newPokemonData = [];
            results.forEach((pokemon, index) => {
                index++;
                let pokemonObject = {
                    id: index,
                    url: IMG_API_URL + index + ".png",
                    name: pokemon.name,
                    icon: ICON_API_URL + index + ".png"
                };
                newPokemonData.push(pokemonObject);
            });
            setPokemonData(newPokemonData);
        }
    });
}, []);

  return (
    <div>
      <h1>Pika</h1>
    </div>
      )
}