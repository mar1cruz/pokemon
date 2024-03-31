import React, {CSSProperties, useEffect, useState} from 'react';
import {Link, NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import {PokemonData} from "./PokemonType";

const Pokemon = () => {
    const [pokemonInfo, setPokemonInfo] = useState<PokemonData>()
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => response.json()).then(data => setPokemonInfo(data))
    }, []);


    const params = useParams<{ pokemonId: string }>()
    const pokemonId = Number(params.pokemonId) + 1
    const onGoBackClick = () => {
        navigate(-1)
    }


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: '100vh',
                fontFamily: 'Rakkas,sans-serif',
                maxWidth: '600px',
                margin: '0 auto',
                position: "relative"

            }}>
            <p style={{
                position: 'absolute',
                left: '-100px',
                top: 20,
                fontSize: '20px',
                textDecoration: "underline",
                cursor: "pointer"
            }} onClick={onGoBackClick}>GO
                BACK</p>

            <div>
                <p style={{fontSize: '50px', textTransform: "uppercase", textAlign: 'center'}}>{pokemonInfo?.name}</p>
                <div style={{border: '4px solid black'}}>
                    <img style={{width: '100%', objectFit: 'cover', padding: '10px'}}
                         src={pokemonInfo?.sprites.other.dream_world.front_default} alt="pokemon"/>
                </div>

                <p style={{textAlign: "center", fontSize: '50px'}}>Abilities</p>
                {pokemonInfo &&
                    <div style={{
                        display: "flex",
                        alignItems: 'center',
                        gap: '20px',
                        justifyContent: 'center'

                    }}>{pokemonInfo.abilities.map((p, index) =>
                        <NavLink to={`/pokemon/${params.pokemonId}/${p.ability.name}`}
                                 key={index}
                                 style={({isActive}) => {
                                     return {
                                         fontSize: "30px",
                                         textDecoration: isActive ? "underline" : "none",
                                         color: "brown",
                                     };
                                 }}


                        >{p.ability.name}</NavLink>)}
                    </div>
                }

            </div>
            <Outlet/>

        </div>

    );
};

export default Pokemon;