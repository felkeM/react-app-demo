import React, { useState, useEffect } from 'react';

export const SwapiHomeworld = (props) => {
    const [world, setWorld] = useState([]);

    const apiUrl = props.planet;

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        setWorld(data);
      });
    }, [apiUrl]);
    return (
        <>
           {world.name}
        </>
    )
}
