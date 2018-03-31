import React from 'react';
import Feature from './Feature';

const FeaturesList = (props) => {
  const features = props.features.map((feature, index) => {
    return (
      <Feature key={index} feature={feature} />
    )
  })
  return (
    <div>
      {features}
    </div>
  );
}

export default FeaturesList;
