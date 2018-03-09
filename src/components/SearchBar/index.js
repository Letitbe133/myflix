import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
            }
        }

        return (
            <div style={styles.container}>
                <TextField
                    floatingLabelText="What are you looking for ?"
                    hintText="What are you looking for ?"
                    onChange={e => this.props.onChange(e.target.value)}
                    style={styles.fieldStyle}
                    value={this.props.value}
                    errorText={this.props.errorText}
                />
                <RaisedButton
                    label="Go get it Bobby!"
                    primary
                    onClick={e => this.props.onClick(e)}
                    style={styles.buttonRaisedStyle}
                />
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


export default SearchBar;
