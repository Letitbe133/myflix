import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';

class SearchForm extends Component {

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
