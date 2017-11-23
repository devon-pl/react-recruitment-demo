export const types = {
  DRAWER_TOGGLE_REQUEST: 'app/DRAWER_TOGGLE_REQUEST'
}

const initialState = {
  anchor: 'left',
  drawerOpen: false,
  theme: {
    direction: 'rtl'
  }
}

export default function reducer (state = initialState, action) {
  switch (action.type) {

    case types.DRAWER_TOGGLE_REQUEST:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }

    default:
      return state
  }
}

export const actions = {
  drawerToggle: () => ({type: types.DRAWER_TOGGLE_REQUEST})
}
