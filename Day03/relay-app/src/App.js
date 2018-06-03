import React, { Component } from 'react';
import BookList from './BookList.js'
import AddBook from './AddBook.js'

class App extends Component {
  render() {
    return (
      <div >
      	<AddBook />
        <BookList />
      </div>
    );
  }
}

export default App;
