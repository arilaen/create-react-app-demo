import React, { Component } from 'react';
import * as $ from 'jquery';

import Header from '../views/Header';
import Todo from '../views/Todo';
import NewTodo from '../views/NewTodo';

function createTodo(title, done, id) {
    return {
      title,
      done,
      editing: false,
      id
    };
}

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Your Todos',
      todos: [],
      newTodoTitle: ''
    };
  }
  componentWillMount() {
    $.get('https://jsonplaceholder.typicode.com/todos', (data) => {
      const todos = data.slice(0, 5).map(todo =>
        createTodo(todo.title, todo.completed, todo.id)
      );
      this.setState({
        todos
      });
    });
  }
  updateTodo(updatedTodo) {
    const todoIndex = this.state.todos.findIndex(t => t.id === updatedTodo.id);
    const newTodos = this.state.todos.slice(0);
    newTodos[todoIndex] = updatedTodo;
    this.setState({todos: newTodos});
  }
  addTodo() {
    const newTodo = createTodo(this.state.newTodoTitle, false, this.state.todos.length + 1);
    this.setState({
      todos: this.state.todos.concat(newTodo),
      newTodoTitle: ''
    });
  }
  updateNewTodoTitle(event) {
    this.setState({newTodoTitle: event.target.value});
  }
  updateEditingTodo(todo, editing) {
    if (!todo.title) {
      return;
    }
    const todoIndex = this.state.todos.findIndex(t => t.id === todo.id);
    const todos = this.state.todos.slice(0);
    todos[todoIndex] = Object.assign({}, todo, {editing});
    this.setState({ todos });
  }
  render() {
    const todosList = this.state.todos.map(todo =>
       <Todo
         todo={todo}
         key={todo.id}
         updateTodo={this.updateTodo.bind(this)}
         updateEditingTodo={this.updateEditingTodo.bind(this)}
         />
    );
    return (<div className="container">
        <Header
          listName={this.state.title} />
        { todosList }
        <NewTodo
          addTodo={this.addTodo.bind(this)}
          newTodoTitle={this.state.newTodoTitle}
          updateNewTodoTitle={this.updateNewTodoTitle.bind(this)}
          />
      </div>);
  }
}
