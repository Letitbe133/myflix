import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import HomeScreen from './screens/HomeScreen'
import logo from './movie_reel.svg'

import './App.css';


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Welcome to My Flix"
            iconElementRight={<img src={logo} className="App-logo" alt="Welcome to MyFlix" />}
          />
          <HomeScreen />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
