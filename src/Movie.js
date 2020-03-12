import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({movie}) => (
  <div>
    <h3>{movie.title}</h3>
    <Link to="/test">
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </Link>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
}