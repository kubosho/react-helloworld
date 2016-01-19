"use strict";

const React = require("react");
const Todo = require("./todo");

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "foo" },
        { id: 2, text: "bar" },
        { id: 3, text: "baz" }
      ]
    };
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleDeleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo onDelete={this.handleDeleteTodo} todo={todo} />
        </li>
      );
    });
    return <ul className="todo-list">{todos}</ul>;
  }
}

module.exports = TodoList;
