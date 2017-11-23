/* istanbul ignore next */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { deepPurple, orange } from 'material-ui/colors'
import 'typeface-roboto'

const target = document.querySelector('#root')

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: orange,
  },
  status: {
    danger: 'orange',
  },
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
