import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Counter from '../components/Counter/'
import counter from '../reducers/'

const store = createStore(counter)
//创立store 用来管理state
//创建一个包含应用程序状态的Redux存储

render(
	<Counter
	value={store.getState()}
	onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
	onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
	/>,
	document.getElementById('reduxCounter')
)

// subscribe，使UI能够响应state变化
store.subscribe(render)
