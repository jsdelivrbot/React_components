"use strict";
import React, { Component } from 'react'; // import React and pull off the property Component as variable Component

class SearchBar extends Component {

  /*
    state is a plane javascript object that exists on any component that is a class based component. Each instance of
    class based component has it's own copy of state
   */

  constructor(props) {
    super(props);                         // Component has it's own constructor function
    this.state = { searchTerm: 'startging value'};       // initialize it with a new object and will contain properties to be recorded
  }

  render() {
    return (
      <div>
        <input
          value={this.state.searchTerm}   // Turns input into a controlled component
          onChange={(event) => {          // This.setState causes the component to rerender and after that,
                                          // the value of the input gets updated
          this.setState({searchTerm: event.target.value}); // the value of the input has not changed ATM
          }} />
        Value of the input: {this.state.searchTerm}
      </div>
    );
  };
}

export default SearchBar;