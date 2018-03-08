import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class MovieDisplay extends Component {

  render() {

    const { query, tmdb, queryResults } = this.props

    const styles = {
      width: "70%",
      marginTop: 20,
      marginBottom: 20,
      marginLeft: "auto",
      marginRight: "auto"
    }

    const buttonStyle = {
      margin: 10
    }

    return (
      <div id="movie" className={!!queryResults.length ? "MovieDisplay-visible" : "MovieDisplay-none" }>
        <h3>You searched for "{query}". Retrieving data from <a href={tmdb} target="blank">The Movie Database...</a></h3>
        <div>
        {
          queryResults.map(item =>
          <Card key={item.id} style={styles}>
            <CardHeader
              title={`Original title : ${item.title}`}
              subtitle={`Release date : ${item.release_date}`}
            />
            <CardMedia>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
            </CardMedia>
            <CardTitle title="Overview" />
            <CardText>
              {(item.overview === "") ? "No overview to be displayed" : item.overview }
            </CardText>
            <RaisedButton
              label="Details"
              primary
              style={buttonStyle}
              onClick={e => this.props.onClick(item.id)}
            />
            <RaisedButton
              label="Add to My Flix"
              primary
              style={buttonStyle}
              // onClick={e => this.props.onClick(e)}
            />
          </Card>)
        }
        </div>
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
