import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state={
    todos: [
      {id: 1, content:'Buy some milk'},
      {id: 2, content:'Go Fo Jouging'},

    ]
  }
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default App;

