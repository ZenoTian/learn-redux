import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//  根组件使用 <Provider> 可以使子组件 获得store,不必使用props传
import { createStore } from 'redux'
import todoApp from '../reducers'
import App from '../components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)