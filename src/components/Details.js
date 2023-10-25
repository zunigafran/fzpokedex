import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setPokemonDetails(response.data);
      }
    });
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const { name, sprites, moves, height, weight, abilities, types } = pokemonDetails;

  return (
    <div className="max-w-full">
      <div>
        <table className="table-auto max-w-full px-2" id="table">
          <tr>
            <img src={sprites?.front_default} alt={name} id="icon"/>
            <h2 id="pknam">{name}</h2>
      <tr>
        {types && types.map((type) => (
          <td className="mr-4" key={type.type.name} id="pktype">{type.type.name}</td>
        ))}
      </tr>
          </tr>
          <tr>
            {abilities && abilities.map((ability) => (
              <td key={ability.ability.name} id="abi">{ability.ability.name}</td>
            ))}
          </tr>
        </table>
      </div>
      <div>
        <table className="table-auto max-w-full px-2" id="stats">
          <thead>
            <h1>Stats</h1>
            <tr>
              <th>------Height------</th>
              <th>------Weight------</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{(height * 0.328084).toFixed(2)} ft</td> {/* Convert to feet */}
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
        <table className="tftable" border="1">
          <tr>
            <th>Move List</th>
          </tr>
          {moves && moves.slice(0, 150).map((move) => (
            <tr key={move.move.name}>
              <td className='grid grid-cols-3'>{move.move.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Details;