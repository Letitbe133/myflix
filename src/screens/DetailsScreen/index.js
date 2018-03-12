import React, { Component } from 'react'
import MovieSingle from '../../components/MovieSingle'

import './index.css'

class DetailsScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      details: []
    }

    this.onShowDetails = this.onShowDetails.bind(this)
  }

  componentDidMount() {
    const url = `${this.state.endpoint}movie/${id}?api_key=${this.state.apiKey}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
          this.setState({details: data})
      })
      .catch(err => console.log('err', err))
  }


  render() {
    return (
      <div >
        <MovieSingle />
      </div>
    );
  }
}

export default DetailsScreen;
