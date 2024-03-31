import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {Link} from "react-router-dom";

export type PokemonType = {
    name: string
    url: string
}

const App = () => {
    const [pokemon, setPokemon] = useState<PokemonType[]>([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokemon(data.results)
            })
    }, []);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
    };

    const filteredItems = pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div><input type="text" onChange={handleSearch}/></div>

            {filteredItems.map((poke, index) => (
                <Link to={`/pokemon/${index}`} style={{width: "fit-content"}} key={index}>{poke.name}</Link>
            ))}
        </div>
    );
};

export default App;