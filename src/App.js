import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './movie_reel.svg';
import SearchForm from './SearchForm';
import MovieDisplay from './MovieDisplay';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      tmdbUrl: 'http://www.themoviedb.org/',
      queryResults: [],
    };

    this.setQuery = this.setQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
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
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!!data.results.length) {
          this.setState({queryResults: data.results})
        }
      })
      .catch(err => console.log('err', err))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="Welcome to MyFlix" />
              <h1 className="App-title">Welcome to My Flix</h1>
            </header>
            <h2>To search for a movie, just type in your query and enjoy ;)</h2>
            <SearchForm
              onClick={this.onSubmit}
              onChange={this.setQuery}
            />
            <MovieDisplay
              query={this.state.query}
              tmdb={this.state.tmdbUrl}
              queryResults={this.state.queryResults}
            />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
