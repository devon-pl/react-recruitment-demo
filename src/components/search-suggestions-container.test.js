import SearchSuggestionsContainer from './search-suggestions-container'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

configure({adapter: new Adapter()})

describe('<SearchSuggestionsContainer />', () => {

  beforeEach(() => {
    sinon.stub(console, 'error')
  })

  afterEach(() => {
    console.error.restore()
  })

  it('renders the component', () => {

    const movieDetails = {
      externals: {
        imdb: 'u2010033343'
      },
      name: 'Matrix'
    }

    const container = mount(
      <SearchSuggestionsContainer data={movieDetails}/>
    )

    expect(container.find(SearchSuggestionsContainer)).toHaveLength(1)
    sinon.assert.notCalled(console.error)
  })
})
