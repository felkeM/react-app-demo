import React from 'react';
import {postData} from '../../data/postData';

export default function LocalDataList() {
    return (
        <>
          {postData.map((data, key) => {
              return (
                <article key={key}>
                  <h2>{data.title}</h2>
                  <figure>
                    <img src={`./images/${data.image}`} alt={data.title} />
                  </figure>
                  <div dangerouslySetInnerHTML={{__html: data.body}} />
                  <p>{data.author} - {data.created}</p>
                </article>
              );
          })}
        </>
    )
}
