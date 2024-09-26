import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../service/Movies";

import MovieList from "../components/MovieList/MovieList";

export default function Navigation() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setPopularMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Welocome Home</h1>
      <MovieList movies={popularMovies} />
    </div>
  );
}
