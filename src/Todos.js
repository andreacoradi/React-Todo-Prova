import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
	render() {
		return (
			this.props.todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					deleteTodo={this.props.deleteTodo}
					toggleTodo={this.props.toggleTodo}
				/>
			))
		)
	}
}

export default Todos
