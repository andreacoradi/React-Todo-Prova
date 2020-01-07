import React, { Component } from 'react'

export class TodoItem extends Component {
	// Questa funzione controlla se il todo è markato come completato, e di conseguenza gli applica il corretto stile
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? "line-through" : "none"
		}
	}

	render() {
		// Questa operazione estrae i seguenti parametri dall'object todo
		// Viene definito "destructuring"
		const { id, title, completed } = this.props.todo
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						defaultChecked={completed}
						onChange={this.props.toggleTodo.bind(this, id)}
					/>
					{title}
					<button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
				</p>
			</div>
		)
	}
}

export default TodoItem
