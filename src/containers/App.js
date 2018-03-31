import React, { Component } from 'react';
import './App.css';
import { FEATURES } from '../library/camp_features';
import FeaturesList from '../components/FeaturesList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      features: FEATURES,
    };
  }

  componentDidMount() {
    console.log("the app just mounted!");
  }

  render() {
    return (
      <div className="App">
        <FeaturesList features = {this.state.features} />
      </div>
    );
  }
}

export default App;
