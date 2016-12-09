const initialState = {
	poems: [],
	poem: {}
}

const reducer = (prev=initialState, action) => {
	switch(action.type){
		case 'RECEIVE_POEMS':
			return Object.assign({}, prev, {
				poems: action.poems
			})
			break
		case 'RECEIVE_POEM':
			return Object.assign({}, prev, {
				poem: action.poem
			})
		default:
			return prev
	}
}

export default reducer