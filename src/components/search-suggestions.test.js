import searchSuggestions from './search-suggestions'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

configure({adapter: new Adapter()})

describe('<SearchSuggestions />', () => {

  beforeEach(() => {
    sinon.stub(console, 'error')
  })

  afterEach(() => {
    console.error.restore()
  })

  it('renders the component', () => {

    const query = 'test'
    const isHighlighted = true
    const suggestion = {
      name: 'test abc',
    }

    const suggestions = searchSuggestions(suggestion, {query, isHighlighted})

    const container = mount(suggestions)

    const spanPropsAbc = container.find('span').first().props()
    expect(spanPropsAbc.children).toEqual(' abc')
    expect(spanPropsAbc.style).toEqual({fontWeight: 300})

    const spanPropsTest = container.find('strong').first().props()
    expect(spanPropsTest.children).toEqual('test')
    expect(spanPropsTest.style).toEqual({fontWeight: 500})
  })
})
