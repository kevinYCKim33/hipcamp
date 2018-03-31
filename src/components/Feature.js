import React from 'react';

const Feature = (props) => {
  // debugger;
  return (
    <li>
      Title: {props.feature.title}<br />
      Presence: {props.feature.presence ? "exists" : "dne"}
    </li>
  )
}

export default Feature;
