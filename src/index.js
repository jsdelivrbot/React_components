// Create a new component. This component should produce some html
// Some HTML
// Always one component per file
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

// <- JSX, not HTML. Babbel and webpack transpile it to vanilla JavaScript
//JSX cannot be interpreted by the browser

const App = () => {
  return <div>Hi!</div>;
};

// Take this component's generated HTML and put it on
// The page (in the Document Object Model)

ReactDOM.render(<App />, document.querySelector('.container'));

