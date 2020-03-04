import React from "react";
import PropTypes from "prop-types";

export default class Movie extends React.Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    desc: PropTypes.string
  }

  static defaultProps = {
    desc: "Description no available"
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.movie.title}
        </h3>
        <p>
          {this.props.desc}
        </p>
      </div>
    )
  }
}