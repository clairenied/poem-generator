import React from 'react'

// remember to come back and have the poems automatically associate with their users

class AddPoem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: '',
			tags: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(field, evt){
		this.setState({
			[field]: evt.target.value
		})
	}

	handleSubmit(evt){
		evt.preventDefault()
		const newPoem = this.state
		this.props.createPoem(newPoem)
	}

	render(){
		return(
			<div>
				<Navbar/>
				<form onSubmit={this.handleSubmit}>
			    <h2>Now Editing { this.state.title }</h2>
			  	
			  	<label>Title</label>
			  	<input type="text" onChange={this.handleChange.bind(this, 'title')} value={this.state.title} name="title"/>

			  	<label>Poem</label>
			  	<textarea onChange={this.handleChange.bind(this, 'text')} value={this.state.poem} name="text"></textarea>

			  	<label>Tags</label>
			  	<input type="text" onChange={this.handleChange.bind(this, 'tags')} value={this.state.tags} name="tags"/>

			  	<button>Submit</button>
				</form>
			</div>	
		)
	}
} 

export default AddPoem