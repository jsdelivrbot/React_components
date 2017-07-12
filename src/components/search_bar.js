"use strict";
import React, { Component } from 'react'; // import React and pull off the property Component as variable Component

class SearchBar extends Component {

  /*
    state is a plane javascript object that exists on any component that is a class based component. Each instance of
    class based component has it's own copy of state
   */

  constructor(props) {
    super(props);                         // Component has it's own constructor function
    this.state = { searchTerm: ''};       // initialize it with a new object and will contain properties to be recorded
  }

  render() {
    return <input onChange={(event) => {
      this.setState({searchTerm: event.target.value});
      console.log(this.state);
    }} />; // call function without brackets
  };

}

export default SearchBar;