import MovieSearchForm from "../components/MovieSearchForm/MovieSearchForm";
import { fetchSearchMovies } from "../service/Movies";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [params] = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    async function fetchData() {
      if (!query) {
        setMovies([]);
        return;
      }
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    }

    fetchData();
  }, [query]);
  return (
    <div>
      <h1>Welocome Movies</h1>
      <MovieSearchForm />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        query && <p>No movie found</p>
      )}
    </div>
  );
}
