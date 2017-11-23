import map from 'lodash/fp/map'
import find from 'lodash/fp/find'

export const types = {
  LOAD_SUGGESTIONS_REQUEST: 'search/LOAD_SUGGESTIONS_REQUEST',
  LOAD_SUGGESTIONS_REQUEST_SUCCESS: 'search/LOAD_SUGGESTIONS_REQUEST_SUCCESS',
  CLEAR_SUGGESTIONS: 'search/CLEAR_SUGGESTIONS',
  UPDATE_INPUT_VALUE: 'search/UPDATE_INPUT_VALUE',
  SELECT_MOVIE: 'search/SELECT_MOVIE'
}

const initialState = {
  isLoading: false,
  suggestions: [],
  value: ''
}

export default function reducers (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_SUGGESTIONS_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case types.LOAD_SUGGESTIONS_REQUEST_SUCCESS:

      return {
        ...state,
        suggestions: map((item) => item.show, action.payload.data),
        isLoading: !state.isLoading
      }

    case types.CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: []
      }

    case types.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: find(item => action.id === item.id, state.suggestions)
      }

    case types.UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.value
      }

    default:
      return state
  }
}

export const actions = {
  updateValue: (value) => ({type: types.UPDATE_INPUT_VALUE, value}),
  selectMovie: (id) => ({type: types.SELECT_MOVIE, id}),
  clearSuggestions: () => ({type: types.CLEAR_SUGGESTIONS}),
  loadSuggestions: (value) => ({
    type: types.LOAD_SUGGESTIONS_REQUEST,
    payload: {
      request: {
        url: 'http://api.tvmaze.com/search/shows?q=' + value
      }
    }
  }),
}
