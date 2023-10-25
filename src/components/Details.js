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

  const { name, sprites, moves, height, weight, abilities } = pokemonDetails;

  return (
    <>
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

    <table className="tftable" border="1">
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Damage Class</th>
            <th>PP</th>
          </tr>
          {moves && moves.slice(0, 150).map((move) => (
            <tr key={move.move.name}>
              <td>{move.move.name}</td>
              <td>{move.move.type.name}</td>
              <td>{move.move.damage_class.name}</td>
              <td>{move.move.pp}</td>
            </tr>
          ))}
        </table>
    </>

  );
};

export default Details;