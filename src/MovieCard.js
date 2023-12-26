

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
       <Link to={`/movie/${movie.id}`}>
 <a href={movie.trailer}>
    <div className="col-md-4" style={{display: 'inline-block'}}>
      <div className="card mb-4 box-shadow" style={{width: '18rem' }}>
        <img src={movie.posterURL} alt={movie.title} className="card-img-top"  />
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p className="card-text">{movie.description}</p>
          <p className="card-text">Rating: {movie.rating}</p>
        </div>
      </div>
    </div>
    </a>
         
        
      </Link>
    </div>
  );
};

export default MovieCard;