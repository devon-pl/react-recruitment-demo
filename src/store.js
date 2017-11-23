import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  routerMiddleware(history)
]

const client = axios.create()

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  applyMiddleware(axiosMiddleware(client)),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
