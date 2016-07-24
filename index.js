import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './reducers'
import AppContainer from './containers/AppContainer'
import axios from 'axios'


let store = createStore(todoApp, {}, applyMiddleware(thunk))
render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
