import React, { Component } from 'react';

import Todos from "./Todos"
import AddTodo from "./AddTodo"
import Header from "./Header"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    const prev_state = JSON.parse(localStorage.getItem('todos'))

    this.state = {
      todos: [
        {
          id: 1,
          title: "Prova 1",
          completed: false
        },
        {
          id: 2,
          title: "Prova 2",
          completed: false
        },
        {
          id: 3,
          title: "Prova 3",
          completed: true
        }
      ]
    }
    if (prev_state) {
      this.state.todos = prev_state
    }
  }

  componentDidUpdate(prevProps) {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }


  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo =>
        todo.id !== id
      )
    })
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearTodos = () => {
    this.setState({ todos: [] })
    localStorage.clear();
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <AddTodo addTodo={this.addTodo} clearTodos={this.clearTodos} />
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
