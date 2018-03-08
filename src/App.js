import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import logo from './movie_reel.svg';
import SearchForm from './SearchForm';
import MovieDisplay from './MovieDisplay';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tmdbUrl: 'http://www.themoviedb.org/',
      endpoint: 'https://api.themoviedb.org/3/',
      query: '',
      queryResults: [],
      details: [],
      genres: [],
    };

    this.setQuery = this.setQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.onShowDetails = this.onShowDetails.bind(this)
  }

  componentDidMount() {
    fetch(`${this.state.endpoint}genre/movie/list?api_key=039009afb934eb20795c0fe1d646eeb4&language=en-US`)
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
    this.setState({
      query: userInput
    })
  }

  /**
   * Méthode pour faire la requête
   * au clic du bouton Submit
   */
  onSubmit(e) {
    e.preventDefault() // disable default click behavior

    // Tmdb API
    // API key : api_key=039009afb934eb20795c0fe1d646eeb4
    // Endpoint : https://api.themoviedb.org/3/

    const { query } = this.state
    const api_key = "039009afb934eb20795c0fe1d646eeb4"
    const url = `${this.state.endpoint}search/movie?api_key=${api_key}&query=${query}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!!data.results.length) {
          this.setState({queryResults: data.results})
        }
      })
      .catch(err => console.log('err', err))
  }

  onShowDetails(id) {
    const api_key = "039009afb934eb20795c0fe1d646eeb4"
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
          this.setState({details: data})
      })
      .catch(err => console.log('err', err))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Welcome to My Flix"
            iconElementRight={<img src={logo} className="App-logo" alt="Welcome to MyFlix" />
          }
          />
          <SearchForm
            onClick={this.onSubmit}
            onChange={this.setQuery}
            genres={this.state.genres}
          />
          <MovieDisplay
            query={this.state.query}
            tmdb={this.state.tmdbUrl}
            queryResults={this.state.queryResults}
            onClick={this.onShowDetails}
          />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
