import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
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
          <AppBar position="sticky">
            <Toolbar>
              <div>
                <Avatar alt="Welcome to MyFlix" src={logo} className="App-logo" />
              </div>
              <Typography variant="title" color="inherit" style={styles.flex}>
                Welcome to MyFlix
              </Typography>
              <IconButton style={styles.menuButton} color="inherit" aria-label="Account" >
                <AccountCircle style={{fontSize: 30}}/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <HomeScreen />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
