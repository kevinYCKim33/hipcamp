import React from 'react';
import FeaturesList from './FeaturesList';
import NoSubFeature from './NoSubFeature';

class Feature extends React.Component {
  constructor() {
    super();
    this.state = {
      displaySubfeatures: false,
    }
  }

  displaySubfeatures = () => {
    this.setState({
      displaySubfeatures: true,
    });
  }

  render() {
    const {subfeatures, presence, title} = this.props.feature;
    let subfeaturesDisplay = null;
    if (this.state.displaySubfeatures) {
      if (subfeatures.length > 0) {
        subfeaturesDisplay = (
          <FeaturesList features={subfeatures}/>
        );
      } else {
        subfeaturesDisplay = (
          <NoSubFeature/>
        )
      }
    }
    return (
      <li onClick={this.displaySubfeatures} className={presence ? "available" : "unavailable"} >
        <div>
          {title}
        </div>
        {subfeaturesDisplay}
      </li>
    );
  }
}

export default Feature;
