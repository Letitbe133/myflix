import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar'
import MovieList from '../../components/MovieList'
import MovieSingle from '../../components/MovieSingle'

import './index.css'

class HomeScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tmdbUrl: 'http://www.themoviedb.org/',
      endpoint: 'https://api.themoviedb.org/3/',
      apiKey: "039009afb934eb20795c0fe1d646eeb4",
      query: '',
      queryResults: [],
      details: [],
      genres: [],
      errorText: ""
    };

    this.setQuery = this.setQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.onShowDetails = this.onShowDetails.bind(this)
  }

  componentDidMount() {
    fetch(`${this.state.endpoint}genre/movie/list?api_key=${this.state.apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        this.setState({genres: data.genres})
      })
      .catch(err => console.log('err', err))
  }

  /**
   * Méthode pour mettre à jour le state 
   * lorsque la valeur de l'input
   * est modifiée
   */
  setQuery(userInput) {
    if (!(userInput.length<=0)) {
      this.setState({
        errorText: "",
        query: userInput
      })
    } else {
      this.setState({
        errorText: "This field cannot be empty"
      })
    }
  }

  /**
   * Méthode pour faire la requête
   * au clic du bouton Submit
   */
  onSubmit(e) {
    e.preventDefault() // disable default click behavior

    const { query } = this.state

    if (!!query.length) {
      const url = `${this.state.endpoint}search/movie?api_key=${this.state.apiKey}&query=${query}`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (!!data.results.length) {
            this.setState({queryResults: data.results})
          }
        })
        .catch(err => console.log('err', err))  
    }
  }

  onShowDetails(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.state.apiKey}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
          this.setState({details: data})
      })
      .catch(err => console.log('err', err))
  }

  render() {
    return (
      <div className="HomeScreen">
        <SearchBar
          onClick={this.onSubmit}
          onChange={this.setQuery}
          genres={this.state.genres}
          value={this.state.query}
          errorText={this.state.errorText}
        />
        <MovieList
          query={this.state.query}
          tmdb={this.state.tmdbUrl}
          queryResults={this.state.queryResults}
          onClick={this.onShowDetails}
        />
      </div>
    );
  }
}

export default HomeScreen;