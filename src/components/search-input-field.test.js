import SearchInputField from './search-input-field'
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import TextField from 'material-ui/TextField'

configure({adapter: new Adapter()})

describe('<SearchInputField />', () => {

  beforeEach(() => {
    sinon.stub(console, 'error')
  })

  afterEach(() => {
    console.error.restore()
  })

  it('renders the component', () => {

    const classes = {
      textField: 'textField',
      input: 'input'
    }

    const container = mount(
      <SearchInputField
        classes={classes}
        autoFocus={true}
      />
    )

    const component = container.find(SearchInputField)
    expect(component).toHaveLength(1)
  })

  it('renders text field with correct props', () => {

    const classes = {
      textField: 'textField',
      input: 'input'
    }

    const autoFocus = true
    const value = 'abc'

    const container = mount(
      <SearchInputField
        classes={classes}
        autoFocus={autoFocus}
        value={value}
      />
    )

    const component = container.find(SearchInputField)
    const textFieldComponent = container.find(TextField)

    expect(component).toHaveLength(1)
    expect(textFieldComponent).toHaveLength(1)

    expect(textFieldComponent.prop('className')).toEqual(classes.textField)
    expect(textFieldComponent.prop('autoFocus')).toEqual(autoFocus)
    expect(textFieldComponent.prop('InputProps')).toEqual({classes: {input: classes.input}})
    expect(textFieldComponent.prop('value')).toEqual(value)
  })

  it('renders text field with correct props', () => {

    const classes = {
      textField: 'textField',
      input: 'input'
    }

    const autoFocus = true
    const value = 'test'

    const container = mount(
      <SearchInputField
        classes={classes}
        autoFocus={autoFocus}
        value={value}
      />
    )

    const textFieldComponent = container.find(TextField)

    const select = jest.fn()

    textFieldComponent.simulate('focus', {
        target: {
          select: select
        }
      }
    )

    expect(select).toHaveBeenCalled()
  })
})
