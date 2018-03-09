import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card'

class MovieSingle extends Component {

  render() {

    const details = this.props.details;

    return (
        <div>
        {
          details.map(detail =>
            <Card key={detail.id} >
              <CardHeader
                title={`Id : ${detail.id}`}
              />
            </Card>)
        }
        </div>
    )
  }
}


export default MovieSingle;
