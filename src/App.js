import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxList from './BoxList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxList />
      </div>
    );
  }
}

export default App;
