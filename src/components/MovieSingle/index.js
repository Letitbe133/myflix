import React, { Component } from 'react'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography';

class MovieSingle extends Component {

  render() {

    const details = this.props.details;
    const genres = this.props.details.genres;

    return (
      (this.props.display) ?
        <div>
        {
          
            <Card key={details.id} >
              { details.backdrop_path ? 
                <CardMedia
                  style={{height: 485}}
                  image={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
                  title={details.title}
                /> :
                null
              }

              <CardContent>
                <Typography variant="headline" component="h2">
                  {`Original title : ${details.original_title}`}
                </Typography>
                <Typography variant="headline" component="p">
                  {`Release date : ${details.release_date}`}
                </Typography>
                <Typography variant="headline" component="p">
                  {`Budget : ${details.budget}`}
                </Typography>
                <Typography component="p">
                  {`Overview : ${details.overview}`}
                </Typography>
                <Typography component="p">
                  {`Vote average : ${details.vote_average}`}
                </Typography>

                {genres.map(genre => (
                  <Typography component="p" key={genre.id}>
                  {`Genre : ${genre.name}`}
                </Typography>
                ))}


              </CardContent>
            </Card>
        }
        </div>
        : null
    )
  }
}


export default MovieSingle;
