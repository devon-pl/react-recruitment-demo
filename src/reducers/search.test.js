import reducer, { actions } from './search'

import configureStore from 'redux-mock-store'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import MockAdapter from 'axios-mock-adapter'

describe('Search reducer', () => {

  it('should clear suggestions', () => {

    let initialState = {
      suggestions: [
        {
          label: 'test'
        }
      ]
    }

    const action = actions.clearSuggestions()

    const newState = reducer(initialState, action)
    expect(newState.suggestions).toEqual([])
  })

  it('should set isLoading flag', () => {

    let initialState = {
      isLoading: false,
      suggestions: []
    }

    const action = actions.loadSuggestions()

    const newState = reducer(initialState, action)
    expect(newState.isLoading).toEqual(true)
  })

  it('should update the input value', () => {

    let initialState = {
      value: ''
    }

    const action = actions.updateValue('test')

    const newState = reducer(initialState, action)
    expect(newState.value).toEqual('test')
  })

  it('should update the input value', () => {

    let initialState = {
      suggestions: [
        {
          id: 1,
          label: 'test'
        },
        {
          id: 2,
          label: 'abc'
        }
      ]
    }

    const action = actions.selectMovie(2)

    const newState = reducer(initialState, action)
    expect(newState.selectedMovie).toEqual(initialState.suggestions[1])
  })

  it('should load suggestions by ajax', async () => {

    const client = axios.create()
    const axiosClientMock = new MockAdapter(client)

    let response = [
      {
        'score': 1,
        'show': {
          'id': 1,
          'name': 'Matrix'
        }
      }
    ]

    axiosClientMock.onGet('http://api.tvmaze.com/search/shows?q=test').reply(200, response)

    const mockStore = configureStore([axiosMiddleware(axiosClientMock.axiosInstance)])
    const store = mockStore({})

    store.dispatch(actions.loadSuggestions('test')).then(() => {
        const storeActions = store.getActions()
        expect(storeActions[0]).toEqual(actions.loadSuggestions('test'))
        expect(storeActions[1].payload.data).toEqual(response)

        const state = {}
        const data = reducer(state, storeActions[1])

        expect(data.suggestions[0].id).toBe(1)
        expect(data.suggestions[0].name).toBe('Matrix')
      }
    )
  })
})
