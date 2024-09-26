import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";

import { fetchDetailsMovies } from "../service/Movies";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchDetailsMovies(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <div>
      <h1>Movie Details</h1>

      <Link to={backLink.current}>Back to movie</Link>

      <div style={{ display: "flex" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          style={{ width: "300px", marginRight: "20px" }}
        />
        <div>
          <h2>{title}</h2>
          <p>User Score: {Math.round(vote_average * 10)}% </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
}
