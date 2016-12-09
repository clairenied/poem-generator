import React from 'react'
import { Link } from 'react-router'

const PoemPage = (props) => {
	const poem = props.poem
	return (
		<div>
			<div className="title">
				<h1>{ poem.title }</h1>
			</div>
			<div className="post">
				<p><i>Poem username placeholder</i></p>
		    <p>{ poem.text }</p>
		    <p><i>{ poem.dateCreated }</i></p>
		    <p><a className="tag" >Poem tags placeholder, poem tags placeholder</a>
		    </p>
			</div>
		</div>
	)
}

export default PoemPage