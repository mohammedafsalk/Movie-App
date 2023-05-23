import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./App.css";
import icon from "./search.svg";
const url = "http://www.omdbapi.com?apikey=5c1c1ae1";

function App() {
  const [movie, setMovie] = useState();
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search For Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={icon} alt="" onClick={() => searchMovies(search)} />
      </div>
      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((item) => (
            <Movie item={item} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
