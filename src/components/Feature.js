import React from 'react';
import FeaturesList from './FeaturesList';
import NoSubFeature from './NoSubFeature';

class Feature extends React.Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      subfeatures: null,
      message: "",
    }
  }

  handleOnClick = () => {
    const {subfeatures} = this.props.feature;
    if (subfeatures.length > 0) {
      this.setState({
        subfeatures
      });
    } else {
      this.setState({
        message: "No subfeatures exist",
      });
    }
  }

  render() {
    const {feature} = this.props;
    const {subfeatures, message} = this.state;

    let dne = null;
    if (message !== "") {
      dne = (
        <NoSubFeature/>
      )
    }
    let thing = null;
    if (subfeatures !== null) {
      thing = (
        <FeaturesList features={subfeatures}/>
      )
    }
    return (
      <li
        onClick={this.handleOnClick}
        className={ feature.presence ? null : "unavailable" }
      >
        <div>
          {feature.title}
        </div>
        {dne}
        {thing}
      </li>
    )
  }
}
export default Feature;
