// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux'

import AppContainer from './containers/AppContainer';
import PoemsContainer from './containers/PoemsContainer'
import PoemContainer from './containers/PoemContainer'

import AddPoem from './components/AddPoem'

// redux
import store from './store'

import { fetchPoemsFromServer, fetchPoemFromServer } from './action-creators/poems'

const loadPoemsContainer = () => {
	return store.dispatch(fetchPoemsFromServer()) 
}

const loadPoemContainer = (nextRouterState) => {
	const poemId = nextRouterState.params.id
	return store.dispatch(fetchPoemFromServer(poemId))
}

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path='/' component={AppContainer}>
	      <Route path='/poem' component={PoemsContainer} onEnter={loadPoemsContainer}/>
	      <Route path='/poem/:id' component={PoemContainer} onEnter={loadPoemContainer}/>
	      <Route path='/poem/create' component={AddPoem} />
	      <IndexRedirect to='/poem' />
	    </Route>
	  </Router>
  </Provider>,
  document.getElementById('app')
);
