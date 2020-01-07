import React, { Component } from 'react';
import SearchField from './SearchField/SearchField';
import List from './List/List';

class App extends Component {
  render() {
    return (
      <div>
        <SearchField />
        <List />
      </div>
    );
  }
}

export default App;