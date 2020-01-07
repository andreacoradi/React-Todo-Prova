import React, { Component } from 'react';

import Todos from "./components/todos/Todos"
import AddTodo from "./components/layout/AddTodo"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor() {
    super()
    // Recupero i vecchi todos dal localstorage
    const prev_state = JSON.parse(localStorage.getItem('todos'))
    // Default state
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
    // Se ci sono li sostituisco allo state di default
    if (prev_state) {
      this.state.todos = prev_state
    }
  }

  // Ogni volta che lo state riceve un cambiamento lo salvo su disco
  // NB: Viene codificato in JSON per rappresentare un array
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  // Dato un id questa funzione esclude quell'elemento dalla lista
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo =>
        todo.id !== id
      )
    })
  }

  // Dato un id questa funzione rende "completed" il corretto todo
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
    // "...this.state.todos" significano che nel nuovo array saranno presenti tutti gli elementi precedenti
    // a cui poi verrà aggiunto l'elemento newTodo
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearTodos = () => {
    localStorage.clear();
    this.setState({ todos: [] })
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
        <Footer />
      </div>
    );
  }
}

export default App;
