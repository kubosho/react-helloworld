"use strict";

const React = require("react");

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.onDelete(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <span>{this.props.todo.text}</span>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </div>
    );
  }
}

Todo.propTypes = {
  onDelete: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired
  })
};

module.exports = Todo;
