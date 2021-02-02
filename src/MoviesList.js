import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const params = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const url = `${process.env.REACT_APP_API_URL}/discover/movie?${params}`;

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieGrid>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`;
