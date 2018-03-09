import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import HomeScreen from './screens/HomeScreen'
import logo from './movie_reel.svg'

import './App.css';

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" style={styles.flex}>
                Welcome to MyFlix
              </Typography>
              <div>
                <Avatar alt="Welcome to MyFlix" src={logo} className="App-logo" />
              </div>
            </Toolbar>
          </AppBar>
          <HomeScreen />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
