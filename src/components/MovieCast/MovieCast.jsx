import { fetchCastMovies } from "../../service/Movies";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchCastMovies(movieId);
        setCast(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast &&
          cast.map((actor) => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} avatar`}
                  width="100"
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
