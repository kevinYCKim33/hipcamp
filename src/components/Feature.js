import React from 'react';
import FeaturesList from './FeaturesList';
import NoSubFeature from './NoSubFeature';

class Feature extends React.Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      displaySubfeatures: false,
    }
  }

  handleOnClick = () => {
    this.setState({
      displaySubfeatures: true,
    });
  }

  render() {
    let subfeaturesDisplay = null;
    const {subfeatures, presence, title} = this.props.feature;
    if (this.state.displaySubfeatures) {
      if (subfeatures.length > 0) {
        subfeaturesDisplay = (
          <FeaturesList features={subfeatures}/>
        );
      } else {
        subfeaturesDisplay = (
          <NoSubFeature/>
        );
      }
    }
    return (
      <li onClick={this.handleOnClick} className={presence ? null : "unavailable"}>
        <div>
          {title}
        </div>
        {subfeaturesDisplay}
      </li>
    );
  }
}
export default Feature;
