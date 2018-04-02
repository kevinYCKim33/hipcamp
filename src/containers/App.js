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
          <div><img className="hipcamp-logo" src={hipcampLogo}/></div>
        </header>
        <div className="App-body">
          Features:
          <FeaturesList features = {this.state.features} />
        </div>
        <footer id="footer">
          <div><img className="github-logo" src={githubLogo}/></div>
        </footer>
      </div>
    );
  }
}

export default App;
