import React, { Component } from 'react';

class SearchForm extends Component {
    // on click : get the user input
    // call omdb api
    // render response in MovieDisplay

    // constructor(props) {
    //     super(props);
    //     // this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick() {
    //     const userInput = document.getElementById('userInput').value;
    //     const target = document.getElementById('movie');
    //     target.classList.remove('MovieDisplay-none');
    //     target.classList.add('MovieDisplay-visible');

    //     // OMDb API
    //     // key = e0a2c4ef
    //     // endpoint = http://www.omdbapi.com/?apikey=[yourkey]&
    //     const url = "http://www.omdbapi.com/?apikey=e0a2c4ef&type=movie&page=2&r=json&s=" + userInput;
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then(function(data) {
    //             let items = data.Search;
    //             items.map(function(item) {
    //                 console.log(item);
    //             })
    //         })
    //         .catch(function(err) {
    //             console.log(err);
    //         })
    //     this.props.onClick(userInput);
    // }

    render() {
        return (
            <div className="SearchForm">
                <form  id="" action="#" method="get" className="SearchForm-form">
                    <input
                        id="userInput"
                        className="SearchForm-form--input"
                        placeholder="Type in your search here"
                        onChange={e => this.props.onChange(e.target.value)}
                    />
                    <input
                        type="submit"
                        className="SearchForm-form--input---submit"
                        value="Go & get it!"
                        onClick={e => this.props.onClick(e)}
                    />
                </form>
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
