import React, { Component } from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import './index.css'

class MovieList extends Component {

  render() {

    const { query, tmdb, queryResults } = this.props

    // const stylesOld = {
    //   width: "70%",
    //   marginTop: 20,
    //   marginBottom: 20,
    //   marginLeft: "auto",
    //   marginRight: "auto"
    // }

    // const buttonStyle = {
    //   margin: 10
    // }

    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        height: 200,
      },
    }

    return (
      <div id="movie" className={!!queryResults.length ? "MovieDisplay-visible" : "MovieDisplay-none" }>
        <h3>You searched for "{query}". Retrieving data from <a href={tmdb} target="blank">The Movie Database...</a></h3>
        <div>
        {
          queryResults.map(item => (
            <Card style={styles.card} key={item.id}>
            { item.poster_path ? 
              <CardMedia
                style={styles.media}
                image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title}
              /> :
              null
            }
              <CardContent>
                <Typography variant="headline" component="h2">
                  {`Original title : ${item.title}`}
                </Typography>
                <Typography component="p">
                  {`Release date : ${item.release_date}`}
                </Typography>
                <Typography component="p">
                  {(item.overview === "") ? "No overview to be displayed" : item.overview }
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="raised"
                  onClick={e => this.props.onClick(item.id)}
                >
                  Details
                </Button>
                <Button
                  size="small"
                  color="primary"
                  variant="raised"
                >
                Add to My Flix
                </Button>
              </CardActions>
            </Card>
          )
        )
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

export default MovieList
