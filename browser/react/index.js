// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// The Provider component provides the redux store to all elements it contains.
// It does so via this.context.store—ultimately this is how all of our connect components will have access to the store.
import { Provider } from 'react-redux'

import LoginFormContainer from './containers/LoginFormContainer'
import CreateAccountContainer from './containers/CreateAccountContainer'

import AppContainer from './containers/AppContainer';
import PoemsContainer from './containers/PoemsContainer'
import PoemContainer from './containers/PoemContainer'
import AddPoemContainer from './containers/AddPoemContainer'



// redux
import store from './store'

import { fetchPoemsFromServer, fetchPoemFromServer } from './action-creators/poems'

const noSessionRedirect = () => {
	let stateObj = store.getState()
	if (!stateObj.user.user.email){
		return browserHistory.push('/login')
	}
}

const loadPoemsContainer = () => {
	noSessionRedirect()
	return store.dispatch(fetchPoemsFromServer()) 
}

const loadPoemContainer = (nextRouterState) => {
	noSessionRedirect()
	const poemId = nextRouterState.params.id
	return store.dispatch(fetchPoemFromServer(poemId))
}

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path='/' component={AppContainer}>
		    <Route path='/login' component={LoginFormContainer} />
		    <Route path='/create-account' component={CreateAccountContainer} />
	      <Route path='/poem/create' component={AddPoemContainer} />
	      <Route path='/poem' component={PoemsContainer} onEnter={loadPoemsContainer}/>
	      <Route path='/poem/:id' component={PoemContainer} onEnter={loadPoemContainer}/>
	      <IndexRedirect to='/poem' />
	    </Route>
	  </Router>
  </Provider>,
  document.getElementById('app')
);
