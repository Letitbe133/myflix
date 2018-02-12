import React, { Component } from 'react';

class MovieDisplay extends Component {

  render() {
      let query = this.props.query;
      let imdb = this.props.imdb;
      let details = this.props.details;
    return (
      <div id="movie" className="MovieDisplay-none">
        <h3>You searched for "{query}". Retrieving data from <a href={imdb} target="blank">IMDb...</a></h3>
        <div>Test data is {details}</div>
      </div>
    );
  }
}

export default MovieDisplay;
