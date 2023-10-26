import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css'

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

  const { name, sprites, stats, moves, height, weight, abilities, types, accuracy, pp, type, damage_class, effect } = pokemonDetails;

  return (
    <div className='max-w-full'>
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
      <h3>Stats:</h3>
      <ul>
        <h3>Height:</h3>
        <p>{(height * 0.328084).toFixed(2)} ft</p> {/* Convert to feet */}
        <p>{(height / 10).toFixed(2)} meters</p> {/* Convert to meters */}
        <h3>Weight:</h3>
        <p>{(weight * 0.220462).toFixed(2)} lbs</p> {/* Convert to pounds */}
        <p>{(weight / 10).toFixed(2)} kg</p> {/* Convert to kilograms */}
        <h3>Abilities:</h3>
        <ul>
        {stats && stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <h3>Moves:</h3>
      <ul>
        {moves && moves.slice(0, 150).map((move) => (
          <li key={move.move.name}>
            {move.move.name}
            <ul>
              <li>Type: {move.move.type && move.move.type.name}</li>
              <li>Damage Class: {move.move.damage_class && move.move.damage_class.name}</li>
              <li>PP: {move.move.pp}</li>
            </ul>
          </li>
        ))}
      </ul>
        {abilities && abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {types && types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <div>
<table className="table-auto max-w-full px-16" id="table">
    <tr>
        <img src={sprites.front_default} alt={name} />
        <h2>{name}</h2> 
        </tr>
        <tr>
        {abilities && abilities.map((ability) => (
          <td key={ability.ability.name}>{ability.ability.name}</td>
          ))}
    </tr>
</table>
</div>
<div>
<table>
    <thead>
        <h1>Stats</h1>
        <tr>
        <th>------Height------</th>
        <th>------Weight------</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{(height * 0.328084).toFixed(2)} ft {/* Convert to feet */}</td>
            <td>{(weight * 0.220462).toFixed(2)} lbs</td>
        </tr>
        <tr>
            <td>{(height / 10).toFixed(2)} meters</td>
            <td>{(weight / 10).toFixed(2)} kg</td>
        </tr>
    </tbody>
</table>    
</div>
<div>
    <table>
        
    </table>
</div>
    </div>
  );
};

export default Details;