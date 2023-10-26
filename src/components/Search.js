
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Search = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input);
  }

  const fetchData = (value) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => response.json())
      .then(data => {
        if (data.name && data.id) {
          setResults([data]);
        } else {
          setResults([]);
        }
      })
      .catch(error => {
        console.error("An error occurred:", error);
        setResults([]);
      });
  }

  const handleResultClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the Details page with the selected Pokémon's ID
  }

  const handleChange = (value) => {
    setInput(value);
  }

  return (
    <div className="p-20vh w-full margin-auto flex flex-col items-center min-w-200px" id="search">
      <form onSubmit={handleSubmit}>
        <div id="search-input" className="bg-white w-full rounded-lg h-10 p-2.5 shadow-md flex items-center" id="input-wrapper">
          <FaSearch id='search-icon' />
          <input className="bg-transparent border-none h-full text-1.25rem w-full ml-5 focus:outline-none" placeholder='Search for a Pokémon' value={input} onChange={(e) => handleChange(e.target.value)} />
          <button type="submit" className="bg-blue-500 text-white rounded-lg h-10 p-2.5 ml-2">Search</button>
        </div>
      </form>
      <div id="search-results">
        {results.map(result => (
          <div key={result.id} onClick={() => handleResultClick(result.id)}>
            <p>Name: {result.name}</p>
            <p>ID: {result.id}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search;