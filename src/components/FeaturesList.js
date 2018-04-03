import React from 'react';
import Feature from './Feature';

const FeaturesList = ({features}) => {
  return (
    <ul className="features">
      {features.map((feature, index) => {
        return (
          <Feature key={index} feature={feature} />
        );
      })}
    </ul>
  );
}

export default FeaturesList;
