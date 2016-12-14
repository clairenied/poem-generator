import axios from 'axios'
import { browserHistory } from 'react-router'

import { 
	ADD_POEM,
	RECEIVE_POEMS,
	RECEIVE_POEM
} from '../constants'

const setPoems = (poems) => {
	return {
		type: RECEIVE_POEMS,
		poems: poems
	}
}

const setPoem = (poem) => {
	return {
		type: RECEIVE_POEM,
		poem: poem
	}
}

const addPoem = (text) => {
	return {
		type: ADD_POEM,
		text: text
	}
}

export const fetchPoemsFromServer = () => {
	return dispatch => {
		axios.get('/api/poem')
		.then(res => dispatch(setPoems(res.data)))
	}
}

export const fetchPoemFromServer = (id) => {
	return dispatch => {
		axios.get(`/api/poem/${id}`)
		.then(res => dispatch(setPoem(res.data)))
	}
}

export const createPoem = (poem) => {
	return (dispatch, getState) => {
		return axios.post('/api/poem/create', {
			title: poem.title,
			text: poem.text,
			tags: poem.tags
		})
		.then(res => res.data)
		.then(() => {
			const newPoems = getState().poems.poems
			dispatch(setPoems(newPoems))
			browserHistory.push('/poem')
		})
	}
}

export const deletePoem = (id) => {
	return (dispatch, getState) => {
		return axios.delete(`/api/poem/${id}/delete`)
		.then(res => res.data)
		.then(() => {
			const updatedPoems = getState().poems.poems
			dispatch(setPoems(updatedPoems))
			browserHistory.push('/poem')
		})
		}
}