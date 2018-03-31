import React, { Component } from 'react';
import './App.css';
import { FEATURES } from '../library/camp_features';
import FeaturesList from '../components/FeaturesList';

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
        Features: 
        <FeaturesList features = {this.state.features} />
      </div>
    );
  }
}

export default App;
