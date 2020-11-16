import React, { useState, useEffect } from 'react';

export const SwapiSpecies = (props) => {
    const [species, setSpecies] = useState([]);

    const apiUrl = props.race;

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        setSpecies(data);
      });
    }, [apiUrl]);
    return (
      <>
        {species.name}
      </>
    )
}
