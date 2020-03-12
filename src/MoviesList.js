import React from 'react';
import Movie from './Movie';
import { API_KEY } from './env';

class MoviesList extends React.Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;