import Drawer from './drawer'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

configure({adapter: new Adapter()})

describe('<Drawer />', () => {

  beforeEach(() => {
    sinon.stub(console, 'error')
  })

  afterEach(() => {
    console.error.restore()
  })

  it('renders the component', () => {

    const classes = {
      drawerList: 'drawerList',
      drawerHeader: 'drawerHeader'
    }

    const theme = {
      direction: 'rtl'
    }

    const handleToggle = function () {}

    const container = mount(
      <Drawer classes={classes} theme={theme} handleToggle={handleToggle}/>
    )

    expect(container.find(Drawer)).toHaveLength(1)
    sinon.assert.notCalled(console.error)
  })
})
