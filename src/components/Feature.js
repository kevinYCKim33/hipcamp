import React from 'react';

class Feature extends React.Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      currentSubfeatures: null,
      message: "",
    }
  }

  handleOnClick = () => {
    if (this.props.feature.subfeatures.length > 0) {
      this.setState({
        currentSubfeatures: this.props.feature.subfeatures,
      });
    } else {
      this.setState({
        message: "No subfeatures exist",
      });
    }
  }

  render() {
    const rNow = this.state.currentSubfeatures;
    const code = this.state.message;
    return (
      <li
        onClick={this.handleOnClick}
        className={ this.props.feature.presence ? null : "unavailable" }
      >
        {this.props.feature.title}
        <br />
        {this.state.message !== ""  &&
          <ul>
            <li>
              No subfeatures to display
            </li>
          </ul>
        }
      </li>
    )
  }
}

export default Feature;
