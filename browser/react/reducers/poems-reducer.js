const initialState = {
	poems: [],
	poem: {
		tags: [],
		user: {
			email: ''
		}
	}
}

export const poemsReducer = (prev=initialState, action) => {
	switch(action.type){
		case 'RECEIVE_POEMS':
			return Object.assign({}, prev, {
				poems: action.poems
			})
			break
		default:
			return prev
	}
}

export const poemReducer = (prev=initialState, action) => {
	switch(action.type){
		case 'RECEIVE_POEM':
			return Object.assign({}, prev, {
				poem: action.poem
			})
			break
		default: 
			return prev
	}
}