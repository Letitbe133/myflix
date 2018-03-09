import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';

import './index.css'

class SearchBar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value: '',
        };
    
        // this.handleChange = this.handleChange.bind(this);
      }

    // handleChange = (event, index, value) => this.setState({value});

    render() {

        // const genres = this.props.genres;

        const styles = {
            container: {
                width: "70%",
                padding: 20,
                display: "flex",
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#757575",
                borderRadius: 30
            },
            fieldStyle: {
                marginLeft: 10,
                marginRight: 20,
            },
            buttonRaisedStyle: {
                marginLeft: 20
            },
            textField: {
                width: 200,
            },
        }

        return (
            <div style={styles.container}>
                <TextField
                    id="search-input"
                    label="What are you looking for ?"
                    placeholder="What are you looking for ?"
                    style={styles.textField}
                    margin="normal"
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)}
                    //errorText={this.props.errorText}
                />
                <Button
                    color="primary"
                    variant="raised"
                    onClick={e => this.props.onClick(e)}
                    style={styles.buttonRaisedStyle}
                >
                Go get it Bobby!
                </Button>
            </div>
        );
    }
}

/**
 * Tu peux utiliser une function ici :)
 * 
 const SearchForm = ({ onClick, onChange }) => {
     return (
         <div className="SearchForm">
             <form  id="" action="#" method="get" className="SearchForm-form">
                 <input id="userInput" type="text" placeholder="Type in your search here" className="SearchForm-form--input" onChange={e => onChange(e.target.value)} />
                 <input type="submit" value="Go & get it!" onClick={e => onClick(e)} className="SearchForm-form--input---submit"/>
             </form>
         </div>
     )
 }
 */


export default SearchBar
