import React from 'react'
import Search from './search'
import { shallow, mount } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import { createMockStore } from 'redux-test-utils'
import MovieDetails from '../components/movie-details'

configure({adapter: new Adapter()})

describe('<Search />', () => {

  it('renders component', () => {

    const container = shallow(
      <MemoryRouter>
        <Search/>
      </MemoryRouter>
    )

    expect(container.find(Search)).toHaveLength(1)
  })

  it('renders movie details', () => {

    const searchStore = {
      search: {
        selectedMovie: {
          externals: {
            imdb: 'u2010033343'
          },
          name: 'Matrix'
        },
        value: '',
        suggestions: []
      }
    }

    const store = createMockStore(searchStore)

    const container = mount(
      <MemoryRouter>
        <Search store={store}/>
      </MemoryRouter>
    )

    expect(container.find(MovieDetails)).toHaveLength(1)
  })
})
