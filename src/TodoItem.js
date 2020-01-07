import React, { Component } from 'react'

export class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? "line-through" : "none"
		}
	}

	render() {
		const { id, title } = this.props.todo
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						defaultChecked={this.props.todo.completed}
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
