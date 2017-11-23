import Menu from './menu'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'

configure({adapter: new Adapter()})

const container = mount(
  <MemoryRouter>
    <Menu/>
  </MemoryRouter>
)

describe('<Menu />', () => {
  it('renders the component', () => {
    expect(container.find(Menu)).toHaveLength(1)
  })
})
