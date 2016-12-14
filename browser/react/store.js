import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { poemsReducer, poemReducer } from './reducers/poems-reducer'
import { userReducer } from './reducers/users-reducer'

export default createStore(combineReducers({
	poems: poemsReducer,
	poem: poemReducer,
	user: userReducer
}), applyMiddleware(createLogger(), thunk))