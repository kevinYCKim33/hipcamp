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
      features: [],
    }
  }

  //simulating API fetching
  componentDidMount() {
    this.setState({
      features: FEATURES,
    });
  }

  render() {
    const {features} = this.state;
    let campsiteFeatures = null;
    if (features.length > 0) {
      campsiteFeatures = (
        <FeaturesList features = {features} />
      );
    };

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <a href="https://www.hipcamp.com/">
              <img className="hipcamp-logo" src={hipcampLogo} alt="hipcampLogo"/>
            </a>
          </div>
        </header>

        <div className="App-body">
          Features:
          {campsiteFeatures}
        </div>

        <footer className="App-footer">
          <div>
            <a href="https://github.com/kevinYCKim33/hipcamp">
              <img className="github-logo" src={githubLogo} alt="githubLogo"/>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
