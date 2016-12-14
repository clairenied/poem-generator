import axios from 'axios'
import { browserHistory } from 'react-router'

import { 
	LOGIN_USER,
	ADD_USER
} from '../constants'

const setUser = (user) => {
	return {
		type: LOGIN_USER,
		user: user
	}
}

const addUser = (user) => {
	return {
		type: ADD_USER,
		user: user		
	}
}

export const loginUser = (email, password) => {
	return dispatch => {
		axios.post('/api/sessions/', {
			email: email,
			password: password
		})
		.then(res => { 
			dispatch(setUser(res.data))
			browserHistory.push('/poem')
		})
	}
}

export const loginUserWithGoogle = () => {
	return dispatch => {
		axios.get('/auth/google/')
		.then(res => { 
			dispatch(setUser(res.data))
			browserHistory.push('/poem')
		})
	}
}

export const createUser = (email, password, firstName, lastName) => {
	return dispatch => {
		axios.post('/api/user/', {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName
		})
		.then(res => { 
			dispatch(addUser(res.data))
			browserHistory.push('/login')
		})
	}
}
