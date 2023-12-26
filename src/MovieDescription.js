import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MoviesData from './MoviesData';




const MovieDescription = () => {
  const { movieId } = useParams();
  const movie = MoviesData.find((m) => m.id === parseInt(movieId));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
      <iframe
        title="Movie Trailer"
        width="560"
        height="315"
        src={movie.trailer}
        frameborder="0"
        allowfullscreen
      ></iframe>
      </div>
      <Link to="/" className="button-link">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDescription;