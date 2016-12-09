import React from 'react'
import { Link } from 'react-router'

const Navbar = (props) => {
	return(
		<div className="navbar">
			<div className="navbar-link-container"><Link className="logo" to="/poem">The Poem Generator</Link></div>
			<div className="navbar-right">
		    <div className="navbar-link-container"><a href="/about">About</a></div>
		    <div className="navbar-link-container">
		    	<Link to="/poem/create">Add Poem</Link>
		    </div>
		    <div className="navbar-link-container">
		    	<Link to="/poem/create">Me</Link>
		    </div>
		    <div className="navbar-link-container">
		    	<Link to="/poem/create">Logout</Link>
		    </div>
	    </div>
    </div>
	)
}

export default Navbar