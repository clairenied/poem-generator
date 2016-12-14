import React from 'react'
import { Link } from 'react-router'

const PoemPage = (props) => {
	const poem = props.poem
	const tags = props.poem.tags
	console.log('typeof props.poem.poem', typeof props.poem.poem)
	return (
		<div>
			<Navbar/>
			<div className="title">
				<h1>{ poem.title }</h1>
			</div>
			<div className="post">
				<p><i>{ poem.user.username }</i></p>
		    <p>{ poem.text }</p>
		    <p><i>{ poem.dateCreated }</i></p>
		    <p>{ tags.map((tag, i) => { 
		    	return ( <a key={i}>{tag}&emsp;</a> ) 
		    })}</p>
		    
		    <a>Edit</a>/<a>Delete</a>
			</div>
		</div>
	)
}

export default PoemPage

// <p>{ 
// 		    	poem.tags.map(tag => {
// 		    		return <a className="tag">tag</a>
// 		    	})}
// 		    </p>