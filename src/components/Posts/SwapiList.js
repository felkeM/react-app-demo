import React, { useState, useEffect } from 'react';
import {SwapiSpecies} from './SwapiSpecies';
import {SwapiHomeworld} from './SwapiHomeworld';
import {SwapiFilms} from './SwapiFilms';

export default function SwapiList() {
    const [person, setPerson] = useState([]);

    const apiUrl = `https://swapi.dev/api/people/?format=json`;

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        setPerson(data.results);
      });
    }, [apiUrl]);
    

    return (
        <>
          {person.map((item, i) => (
            <aside key={i}>
                <h2>{item.name}</h2>
                <p>Birth Year: {item.birth_year}</p>
                <p>Sex: {item.gender}</p>
                <p>Homeworld: <SwapiHomeworld planet={item.homeworld} /></p>
                <p>Species: {item.species.length > 0 ? (<SwapiSpecies race={item.species} />) : "n/a"}
                </p>
                <p>Films:</p>
                <SwapiFilms filmsUrl={item.films} /> 
            </aside>
          ))}
        </>
    )
}
