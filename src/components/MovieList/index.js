import React, { Component } from 'react'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui-icons/FavoriteBorder'
import Favorite from 'material-ui-icons/Favorite'
import Theaters from 'material-ui-icons/Theaters'

import './index.css'

class MovieList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLiked: false,
    }

    this.handleLike = this.handleLike.bind(this)
    this.handleDetails = this.handleDetails.bind(this)

  }

  handleLike() {
    (this.state.isLiked) ? this.setState({isLiked: false}) : this.setState({isLiked: true})
  }

  handleDetails() {
    alert('click')
  }

  render() {

    const { query, tmdb, queryResults } = this.props

    const styles = {
      card: {
        maxWidth: 345,
        marginBottom: 20
      },
      cardItems: {
        marginBottom: 10
      },
      media: {
        height: 485,
      }
    }

    return (
      <div id="movie" className={!!queryResults.length ? "MovieDisplay-visible" : "MovieDisplay-none" }>
        {/* <h3>You searched for "{query}". Retrieving data from <a href={tmdb} target="blank">The Movie Database...</a></h3> */}
        <div>
        {
          queryResults.map(item => (
            <Card style={styles.card} key={item.id}>
            <IconButton onClick={this.handleLike}>
              {(this.state.isLiked) ? <Favorite /> : <FavoriteBorder />}
            </IconButton >
            <IconButton onClick={e => this.props.onClick(item.id)}>
              <Theaters />
            </IconButton >

            
            { item.poster_path ? 
              <CardMedia
                style={styles.media}
                image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title}
              /> :
              null
            }
              <CardContent>
                <Typography variant="headline" component="h2" style={styles.cardItems}>
                  {`Original title : ${item.title}`}
                </Typography>
                <Typography component="p" style={styles.cardItems}>
                  {`Release date : ${item.release_date}`}
                </Typography>
                <Typography component="p" style={styles.cardItems}>
                  {(item.overview === "") ? "No overview to be displayed" : item.overview }
                </Typography>
              </CardContent>
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
