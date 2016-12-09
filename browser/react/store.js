import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import poemsReducer from './reducers/poems-reducer'

export default createStore(combineReducers({
	poems: poemsReducer
}), applyMiddleware(createLogger(), thunk))