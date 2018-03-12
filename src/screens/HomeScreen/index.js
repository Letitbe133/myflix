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
      error: false,
      display: false
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
    this.setState({ query: userInput })
  }

  /**
   * Méthode pour faire la requête
   * au clic du bouton Submit
   */
  onSubmit(e) {
    e.preventDefault() // disable default click behavior
    const { query } = this.state

    if (!!query.length) {
      // console.log("query not empty", query)
      const url = `${this.state.endpoint}search/movie?api_key=${this.state.apiKey}&query=${query}&include_adult=false`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('data', data)
          if (!!data.results.length) {
            this.setState({queryResults: data.results, query: ""})
          }
        })
        .catch(err => console.log('err', err))  
    } else {
      this.setState({
        error: true
      })
    }
  }

  onShowDetails(id) {
    const url = `${this.state.endpoint}movie/${id}?api_key=${this.state.apiKey}&include_adult=false`
    fetch(url)
      .then(response => response.json())
      .then(data => {
          this.setState({details: data, display: true})
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
          error={this.state.error}
        />
        <MovieList
          query={this.state.query}
          tmdb={this.state.tmdbUrl}
          queryResults={this.state.queryResults}
          onClick={this.onShowDetails}
        />
        <MovieSingle
          details={this.state.details}
          display={this.state.display}
        />

      </div>
    );
  }
}

export default HomeScreen;
