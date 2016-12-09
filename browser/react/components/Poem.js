import React from 'react'
import { Link } from 'react-router'

const Poem = (props) => {
	console.log('poem props', props.poem)
	const poem = props.poem
	return (
		<div className="post">
	    <h2><Link to={`/poem/${poem.id}`}>{ poem.title }</Link></h2>
	    <p><i>Poem username placeholder</i></p>
	    <p>{ poem.text }</p>
	    <p><i>{ poem.dateCreated }</i></p>
	    <p><a className="tag" >Poem tags placeholder, poem tags placeholder</a>
	    </p>
	  </div>
	)
}

export default Poem