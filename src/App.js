import React, { Component } from 'react';
import logo from './movie_reel.svg';
import SearchForm from './SearchForm';
import MovieDisplay from './MovieDisplay';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      imdbUrl: 'http://www.imdb.com/',
      details: [],
    };

    // this.getMovies = this.getMovies.bind(this);
    // this.updateKeyword = this.updateKeyword.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

// getMovies(query) {
//   // OMDb API
//   // key = e0a2c4ef
//   // endpoint = http://www.omdbapi.com/?apikey=[yourkey]&
//   const url = "http://www.omdbapi.com/?apikey=e0a2c4ef&type=movie&page=2&r=json&s=" + query;
//   fetch(url)
//       .then((response) => response.json())
//       .then(function(data) {
//           let items = data.Search;
//           // items.map(function(item) {
//           //     console.log(item);
//           // })
//           return items;
//       })
//       .catch(function(err) {
//           console.log(err);
//       })
// }

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

    const { query } = this.state
    const url = `http://www.omdbapi.com/?apikey=e0a2c4ef&type=movie&page=2&r=json&s=${query}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Search && data.Search.length > 0) {
          this.setState({ details: data.Search })
        }
      })
      .catch(err => console.log('err', err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Flix</h1>
        </header>
        <h2 className="App-intro">
          To search for a movie, just type in your query and enjoy ;).
        </h2>
        <SearchForm
          onClick={this.onSubmit}
          onChange={this.setQuery}
        />
        <MovieDisplay
          query={this.state.query}
          imdb={this.state.imdbUrl}
          details={this.state.details}
        />
    </div>
    );
  }
}

export default App;
