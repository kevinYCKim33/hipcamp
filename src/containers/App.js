import React, { Component } from 'react';
import './App.css';
import { FEATURES } from '../library/camp_features';
import FeaturesList from '../components/FeaturesList';
import hipcampLogo from '../images/hipcamp-logo.png';
import githubLogo from '../images/github-logo.png';


class App extends Component {

  constructor() {
    super();
    this.state = {
      features: FEATURES,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><a href="https://www.hipcamp.com/"><img className="hipcamp-logo" src={hipcampLogo}/></a></div>
        </header>
        <div className="App-body">
          Features:
          <FeaturesList features = {this.state.features} />
        </div>
        <footer className="App-footer">
          <div><a href="https://github.com/kevinYCKim33/hipcamp"><img className="github-logo" src={githubLogo}/></a></div>
        </footer>
      </div>
    );
  }
}

export default App;
