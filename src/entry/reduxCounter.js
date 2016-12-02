import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Counter from '../components/Counter/'
import counter from '../reducers/'

const store = createStore(counter)

render(
	<Counter
	value={store.getState()}
	onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
	onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
	/>,
	document.getElementById('reduxCounter')
)
store.subscribe(render)
