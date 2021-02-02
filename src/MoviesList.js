import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const params = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const url = `${process.env.REACT_APP_API_URL}/discover/movie?${params}`;

class MoviesList extends React.Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch(url);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <MovieGrid>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`;
