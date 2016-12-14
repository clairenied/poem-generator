import { connect } from 'react-redux'
import React from 'react'
import { loginUser, loginUserWithGoogle } from '../action-creators/users'
import { Link } from 'react-router'
import NavbarUnauthorized from '../components/NavbarUnauthorized'

class LoginForm extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			email: '',
			password: '',
			emailWarning: false,
			passwordWarning: false
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.loginWithGoogle = this.loginWithGoogle.bind(this)
	}

	handleChange(field, evt){
		this.setState({
			[field]: evt.target.value
		})
	}

	handleSubmit(evt){
		evt.preventDefault()
		this.props.loginUser(this.state.email, this.state.password)
	}

	loginWithGoogle(evt){
		evt.preventDefault()
		this.props.loginUserWithGoogle()
	}

	render(){
		return(
			<div>
				<NavbarUnauthorized />
				<div className="login-form">
					<div className="login-title">
						<div className="logo-image">
							<h1>(&ensp;poem&ensp;)&#123;&ensp;generator&ensp;&#125;&#59;</h1>
						</div>
					</div>
					
					<form onSubmit={this.handleSubmit}>
						<h2>Login</h2>

				  	<label>Your email</label>
				  	<input 
				  		type="text" 
				  		onChange={this.handleChange.bind(this, 'email')} 
				  		value={this.state.email} 
				  		name="email"
				  	/>
				  	
				  	<label>Your password</label>
				  	<input 
				  		type="text" 
				  		onChange={this.handleChange.bind(this, 'password')} 
				  		value={this.state.password} 
				  		name="password"
				  	/>

						<button type="submit">Login</button>
						
						<div className="buffer oauth">
		          <a target="_self"
		          	onClick={this.loginWithGoogle}
	             	href="/auth/google"
	             	className="button">
			          <span>Or, Login with Google</span>
		          </a>
		          <span> | </span>
			        <Link to="/create-account"><span> No account?</span></Link>
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
		loginUser: (email, password) => { dispatch(loginUser(email, password)) },
		loginUserWithGoogle: () => { dispatch(loginUserWithGoogle() )}
	}
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer


