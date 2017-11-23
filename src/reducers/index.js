import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './app'
import search from './search'

export default combineReducers({
  routing: routerReducer,
  app,
  search
})
