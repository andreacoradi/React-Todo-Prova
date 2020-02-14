import React, { Component } from 'react'

export class TodoItem extends Component {
	// Questa funzione controlla se il todo è markato come completato, e di conseguenza gli applica il corretto stile
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '8px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
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
					/> {' '}
					{title}
					<button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
				</p>
			</div>
		)
	}
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem
