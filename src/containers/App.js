import React, { Component } from 'react';
import './App.css';
import {FEATURES} from '../library/camp_features'

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

      </div>
    );
  }
}

export default App;
