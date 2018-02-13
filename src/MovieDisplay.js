import React, { Component } from 'react';

class MovieDisplay extends Component {

  render() {
      // let query = this.props.query;
      // let imdb = this.props.imdb;
      // let details = this.props.details;

    const { query, imdb, details } = this.props

    return (
      <div id="movie" className={!!details.length ? "MovieDisplay-visible" : "MovieDisplay-none" }>
        <h3>You searched for "{query}". Retrieving data from <a href={imdb} target="blank">IMDb...</a></h3>
        <ul>
        {
          details.map(item => <li key={item.imdbID}>{item.Title}</li>)
        }
        </ul>
      </div>
    )
  }
}

/**
 * Tu peux utiliser une function ici :)
 * 
 const MovieDisplay = ({ query, imdb, details}) => {
   return (
     <div id="movie" className={details.length > 0 ? "MovieDisplay-visible" : "MovieDisplay-none" }>
       <h3>You searched for "{query}". Retrieving data from <a href={imdb} target="blank">IMDb...</a></h3>
         <ul>
         {
           details.map(item => <li key={item.imdbID}>{item.Title}</li>)
         }
         </ul>
     </div>
   )
 }
 */

export default MovieDisplay;
