import MovieDetails from './movie-details'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import sinon from 'sinon'

configure({adapter: new Adapter()})

describe('<MovieDetails />', () => {

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
      <MemoryRouter>
        <MovieDetails data={movieDetails}/>
      </MemoryRouter>
    )

    expect(container.find(MovieDetails)).toHaveLength(1)
    sinon.assert.notCalled(console.error)
  })
})
