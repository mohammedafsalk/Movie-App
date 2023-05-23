import React from "react";

function Movie({item}) {
  return (
    <div className="movie">
      <div>
        <p>{item.Year}</p>
      </div>
      <div>
        <img src={item.Poster !== 'N/A' ? item.Poster :'https://via.placeholder.com/400' } alt="" />
      </div>
      <div>
        <span>{item.Type}</span>
        <h3>{item.Title}</h3>
      </div>
    </div>
  );
}

export default Movie;
