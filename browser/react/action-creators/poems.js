import axios from 'axios'

import { 
	ADD_POEM,
	RECEIVE_POEMS,
	RECEIVE_POEM
} from '../constants'

export const addPoem = (text) => {
	return {
		type: ADD_POEM,
		text: text
	}
}

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