import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AbilityType} from "./AbilityType";

const Ability = () => {
    const params = useParams<{ ability: string }>()

    const [ability, setAbility] = useState<AbilityType>()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/ability/${params.ability}`)
            .then(response => response.json())
            .then(data => setAbility(data))
    }, [ability])

    return (
        <div>
            {ability?.effect_entries.map((el, index) => <p style={{fontSize: '20px'}} key={index}>{el.effect}</p>)}
        </div>
    );
};

export default Ability;