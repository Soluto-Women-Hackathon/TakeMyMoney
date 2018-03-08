import React, { Component } from 'react';
import Login from "./login";
import Wheel from "./wheel";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login/>
          <Wheel/>
      </div>
    );
  }
}

export default App;
