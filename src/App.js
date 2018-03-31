import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FEATURES} from './library/camp_features'

class App extends Component {
  constructor(){
    super();
    this.state = {FEATURES};
  }

  componentDidMount() {
    console.log("the app just mounted!");
  }

  render() {
    return (
      <div className="App">
        <div>

        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
