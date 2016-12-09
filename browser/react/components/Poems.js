import React from 'react'
import Poem from './Poem'
import { Link } from 'react-router'

const Poems = (props) => {
	const poems = props.poems.poems
	return(
		<div>
			<div className="title">
	      <Link to="/poem">
	      	<h1>All Poems</h1>
	      </Link>
	    </div>
			{ poems.map(poem =>
					<Poem poem={poem} key={poem.id}/> 
			)}
		</div>
	)
}

export default Poems