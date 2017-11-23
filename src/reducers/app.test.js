import reducer, { actions } from './app'

describe('App reducer', () => {

  it('should toggle the drawer', () => {

    let initialState = {
      drawerOpen: false,
    }

    const action = actions.drawerToggle()

    const newState = reducer(initialState, action)
    expect(newState.drawerOpen).toEqual(true)
  })
})
