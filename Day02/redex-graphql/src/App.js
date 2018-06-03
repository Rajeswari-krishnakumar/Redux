import React, { Component } from 'react';
import Books from './Books'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux GraphQL Example</h1>
        <hr/>  
        <Books/>
      </div>
    );
  }
}

export default App;
