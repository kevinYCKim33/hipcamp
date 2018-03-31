import React from 'react';
import Feature from './Feature';

const FeaturesList = ({features}) => {
  return (
    <div>
      {features.map((feature, index) => {
        return (
          <Feature key={index} feature={feature}/>
        )
      })}
    </div>
  );
}

export default FeaturesList;
