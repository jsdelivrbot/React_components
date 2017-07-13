// Create a new component. This component should produce some html
// Some HTML
// Always one component per file
"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDCSN075ONuXRZVa_3mkbIj0oPDHqW5gLk';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// JSX, not HTML. Babbel and webpack transpile it to vanilla JavaScript
// JSX cannot be interpreted by the browser

/*
 Refactor the functional component(App) to a class base component to keep track of the list of videos by
 recording them on its state

 */

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    )
  }
}

// Take this component's generated HTML and put it on
// The page (in the Document Object Model)

ReactDOM.render(<App />, document.querySelector('.container'));

