import React from 'react'

const AddPoem = (props) => {
	return(
		<div>
			<form>
		    <h2>Add Poem</h2>
		  	<label>Username</label>
		  	<input type="text" name="username"/>

		  	<label>Title</label>
		  	<input type="text" name="title"/>

		  	<label>Poem</label>
		  	<textarea name="text"></textarea>

		  	<label>Tags</label>
		  	<input type="text" name="tags"/>

		  	<button>Submit</button>
			</form>
		</div>
	)
} 

export default AddPoem