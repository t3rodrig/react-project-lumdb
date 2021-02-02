import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = `${process.env.REACT_APP_IMG_URL}/w154`;
const BACKDROP_PATH = `${process.env.REACT_APP_IMG_URL}/w1280`;
const params = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
const url = `${process.env.REACT_APP_API_URL}/movie`;

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});

  const fetchMovie = async (arg) => {
    const { id } = arg.match.params;
    try {
      const res = await fetch(`${url}/${id}?${params}`);
      const data = await res.json();
      setMovie(data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovie(props);
  }, []);

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Overdrive id={`${movie.id}`}>
          <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
};

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover 
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
