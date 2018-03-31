import React from 'react';

const Feature = ({feature}) => {

  return (
    <li className={ feature.presence ? null : "unavailable" }>
      {feature.title}
    </li>
  )
}

export default Feature;
