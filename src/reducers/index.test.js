import { createStore } from 'redux'
import rootReducer from './index'
import app from './app'
import search from './search'

describe('Root reducer', () => {

  it('should contain all reducers', () => {

    let store = createStore(rootReducer)

    expect(store.getState().app).toEqual(app(undefined, {}))
    expect(store.getState().search).toEqual(search(undefined, {}))
  })
})
