import React, { Component } from 'react'

export class AddTodo extends Component {
	state = {
		title: ""
	}

	onChange = (e) => {
		this.setState({ title: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		if (this.state.title !== "") {
			this.props.addTodo(this.state.title)
			this.setState({ title: "" })
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" placeholder="Add Todo..." onChange={this.onChange} />
				<input type="submit" value="Submit" />
				<button onClick={this.props.clearTodos}>Clear All</button>
			</form>
		)
	}
}

export default AddTodo
