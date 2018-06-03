import React, { Component } from 'react';
import MathComponent from './MathComponent'
import MathHistory from './mathHistory'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1> React Redux Example </h1> 
        </div>
        <MathComponent />
        <MathHistory />
      </div>
    );
  }
}

export default App;
