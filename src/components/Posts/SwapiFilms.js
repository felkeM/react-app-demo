import React, { useState, useEffect } from 'react';

export const SwapiFilms = (props) => {
    const [films, setFilms] = useState([]);

    const filmList = props.filmsUrl;

    useEffect(() => {
      async function getData() {
        try {
          const responses = await Promise.all(filmList.map(url => fetch(url)));
          const filmsArray = await Promise.all(responses.map(res => res.json()));
    
          console.log(filmsArray);
          setFilms(filmsArray);
        } catch (error) {
          console.log(error);
        }
      }
      
      getData();
    }, [filmList]);

    return (
      <>
        <ul>
          {films.map((item, i) => (
            <li key={i}><p>{item.title} - Director: {item.director}</p></li>
          ))}
        </ul>
      </>
    )
}
