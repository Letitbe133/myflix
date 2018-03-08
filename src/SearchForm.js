import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SearchForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        const cardStyle = {
            marginTop: 50,
            marginBottom: 50,
            marginLeft:  "auto",
            marginRight:  "auto",
            width: "50%",
            padding: 20
        }

        const buttonRaisedStyle = {
            marginLeft: 20
        }

        return (
            <Card style={cardStyle}>
                <div className="SearchForm">
                    <SelectField
                        floatingLabelText="Choose your genre"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                            <MenuItem value={1} primaryText='test'/>
                    </SelectField>
                    <TextField hintText="What are you looking for ?" onChange={e => this.props.onChange(e.target.value)}/>
                    <RaisedButton label="Go get it Bobby!" primary onClick={e => this.props.onClick(e)} style={buttonRaisedStyle}/>
                </div>
            </Card>
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
