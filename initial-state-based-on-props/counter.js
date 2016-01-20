"use strict";

const React = require("react");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      initialCount: 0
    };
    this.state = {
      count: this.props.initialCount
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialCount: React.PropTypes.number
};

module.exports = Counter;
