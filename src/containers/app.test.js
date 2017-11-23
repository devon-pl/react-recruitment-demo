import React from 'react'
import App, { AppContainer } from './app'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'
import { createMockStore } from 'redux-test-utils'
import { Provider } from 'react-redux'
import searchStore from '../reducers/search'
import appStore from '../reducers/app'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import sinon from 'sinon'
import { actions } from '../reducers/app'

configure({adapter: new Adapter()})

jest.mock('../components/drawer', () => () => <span>Drawer</span>)

describe('<App />', () => {
  beforeEach(() => {
    sinon.stub(console, 'error')
  })

  afterEach(() => {
    console.error.restore()
  })

  it('renders component', () => {

    const storeData = {
      search: searchStore(undefined, {}),
      app: appStore(undefined, {}),
    }

    const store = createMockStore(storeData)

    const container = mount(
      <Provider store={store}>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </Provider>
    )

    expect(container.find(App)).toHaveLength(1)
    sinon.assert.notCalled(console.error)
  })

  it('dispatches the toggleDrawer event', () => {

    const storeData = {
      search: searchStore(undefined, {}),
      app: appStore(undefined, {}),
    }

    const store = createMockStore(storeData)
    store.dispatch = jest.fn()

    const classes = {
      root: 'root',
      appFrame: 'appFrame'
    }

    const theme = {
      direction: 'rtl'
    }

    const container = mount(
      <Provider store={store}>
        <MemoryRouter>
          <App classes={classes} theme={theme}/>
        </MemoryRouter>
      </Provider>
    )

    container.find(Toolbar).find(IconButton).find('button').first().simulate('click')
    expect(store.dispatch).toBeCalledWith(actions.drawerToggle())
    sinon.assert.notCalled(console.error)
  })
})
