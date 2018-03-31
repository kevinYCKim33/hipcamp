import React from 'react';
import Feature from './Feature';

const FeaturesList = ({features}) => {
  return (
    <div>
      Features:
      <ul className="features">
        {features.map((feature, index) => {
          return (
            <Feature key={index} feature={feature}/>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturesList;
