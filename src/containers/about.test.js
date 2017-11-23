import About from './about'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('<About />', () => {
  it('renders component', () => {

    const container = mount(
      <About />
    )

    expect(container.find(About)).toHaveLength(1)
  })
})
