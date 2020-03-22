import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;