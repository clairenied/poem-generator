import { connect } from 'react-redux'
import React from 'react'
import { createUser } from '../action-creators/users'
import { Link } from 'react-router'
import NavbarUnauthorized from '../components/NavbarUnauthorized'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      passwordMatch: this.password === this.confirmPassword,
      firstName: '',
      lastName: ''
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
    const userToCreate = this.state
    this.props.createUser(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
    return
  }

  render(){
    return(
    	<div>
	    	<NavbarUnauthorized />
	      <div className="login-form">
	        <form onSubmit={this.handleSubmit}>
	          <h2>Create Account</h2>

	          <label>First Name</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'firstName')} 
	            value={this.state.firstName} 
	            name="firstName"/>

	          <label>Last Name</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'lastName')} 
	            value={this.state.lastName} 
	            name="lastName"
	          />
	            
	          <label>Email</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'email')} 
	            value={this.state.email} 
	            name="email"
	          />
	          
	          <label>Password</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'password')} 
	            value={this.state.password} 
	            name="password"
	          />

	          <label>Confirm Password</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'confirmPassword')} 
	            value={this.state.confirmPassword} 
	            name="confirmPassword"
	          />

	          <button type="submit">Create Account</button>

	          <div className="buffer oauth">
		          <a target="_self"
		             href="/auth/google"
		             className="button">
		          <span>Or, Create Account with Google</span>
		          </a>
		          <span> | </span>
			        <Link to="/login"><span> Have an Account Already? </span></Link>
		        </div>

	        </form>
	      </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
	return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createUser: (email, password, firstName, lastName) => { dispatch(createUser(email, password, firstName, lastName)) }
	}
}

const CreateAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);

export default CreateAccountContainer