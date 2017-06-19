import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './containers/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <p className="App-intro">
          Demo for Intro to React.js class
        </p>
        <TodoApp />
      </div>
    );
  }
}

export default App;
