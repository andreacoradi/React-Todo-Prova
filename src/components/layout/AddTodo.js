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
		const input = document.getElementById("inputField")
		input.focus()
		input.value = ""
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input id="inputField"
					type="text"
					placeholder="Add Todo..."
					onChange={this.onChange}
					style={{ flex: '10', padding: '5px' }}
				/>
				<input type="submit" value="Submit"
					style={{ flex: '1' }}
					className="btn"
				/>
				<button onClick={this.props.clearTodos}
					className="btn"
					style={{ flex: '1' }}>Clear All</button>
			</form>
		)
	}
}

export default AddTodo
