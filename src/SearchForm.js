import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SearchForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        const genres = this.props.genres;

        const style = {
            marginTop: 50,
            marginBottom: 50,
            marginLeft:  "auto",
            marginRight:  "auto",
            width: "70%",
            padding: 20,
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#757575",
            borderRadius: 30
        }

        const fieldStyle = {
            marginLeft: 10,
            marginRight: 10,
        }

        const buttonRaisedStyle = {
            marginLeft: 20
        }


        return (
            <div style={style}>
                    <SelectField
                        hintText="Choose your category"
                        value={this.state.value}
                        onChange={this.handleChange}
                        style={fieldStyle}
                    >
                        {
                            genres.map(genre => 
                                <MenuItem value={genre.name} key={genre.id} primaryText={genre.name}/>
                            )
                        }
                    </SelectField>
                    <TextField hintText="What are you looking for ?" onChange={e => this.props.onChange(e.target.value)} style={fieldStyle}/>
                    <RaisedButton label="Go get it Bobby!" primary onClick={e => this.props.onClick(e)} style={buttonRaisedStyle}/>
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


export default SearchForm;
