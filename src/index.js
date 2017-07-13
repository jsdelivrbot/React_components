// Create a new component. This component should produce some html
// Some HTML
// Always one component per file
"use strict";

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDCSN075ONuXRZVa_3mkbIj0oPDHqW5gLk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // this.setState({videos: videos})
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => this.setState({ videos }) )
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

