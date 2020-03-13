import React from 'react';
import { API_KEY } from './env';

class MovieDetail extends React.Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <h3>{this.state.movie.release_date}</h3>
        <p>{this.state.movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;