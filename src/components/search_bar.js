"use strict";
import React,  { Component } from 'react'; // import React and pull off the property Component as variable Component

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />; // call function without brackets
  };

  onInputChange(event) { // on/handle + name of element + name of the event
    console.log(event.target.value);
  };
}

export default SearchBar;