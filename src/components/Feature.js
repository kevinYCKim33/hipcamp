import React from 'react';

class Feature extends React.Component {
  constructor() {
    super();
  }

  handleOnClick = () => {
    debugger;
  }

  render() {
    return (
      <li onClick={this.handleOnClick} className={ this.props.feature.presence ? null : "unavailable" }>
        {this.props.feature.title}
      </li>
    )
  }
}

export default Feature;
