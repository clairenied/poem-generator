const initialState = {
	user: {}
}

export const userReducer = (prev=initialState, action) => {
	switch(action.type){
		case 'LOGIN_USER':
			return Object.assign({}, prev, {
				user: action.user
			})
			break
		case 'ADD_USER':
			return Object.assign({}, prev, {
				user: action.user
			})
			break
		default:
			return prev
	}
}