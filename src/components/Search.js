import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => response.data()).then(data =>
        {
            console.log(data);
        });
    }
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <div className="p-[20vh] w-full margin-auto flex flex-col items-center min-w-[200px]" id="search">
    <div id="search-input">
        <div className="bg-white w-full rounded-lg h-10 p-2.5 shadow-md flex items-center" id="input-wrapper">
            <FaSearch  id='search-icon' />
            <input className="bg-transparent border-none h-full text-1.25rem w-full ml-5 focus:outline-none" placeholder='Type a Pokémon' value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    </div>
    <div id="search-results">SearchResults</div>
    </div>
  )
}

export default Search