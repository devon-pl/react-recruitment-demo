import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import DrawerComponent from '../components/drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import SearchContainer from '../containers/search'
import About from '../containers/about'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { styles } from './app.style'
import { actions } from '../reducers/app'
import { bindActionCreators } from 'redux'

export const AppContainer = props => (
  <div className={props.classes.root}>
    <div className={props.classes.appFrame}>
      <AppBar className={classNames(props.classes.appBar, props.drawerOpen && props.classes.appBarShift)}>
        <Toolbar disableGutters={!props.drawerOpen}>
          <IconButton
            color="contrast"
            aria-label="Menu"
            onClick={props.drawerToggle}
            className={classNames(props.classes.menuButton, props.drawerOpen && props.classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography type="title" color="inherit" noWrap className={props.classes.flex}>
            TV Show Search
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        open={props.drawerOpen}
        classes={props.classes}
        handleToggle={props.drawerToggle}
        theme={props.theme}
      />
      <div className={props.classes.mainContainer}>
        <main className={props.classes.content}>
          <Route exact path="/" component={SearchContainer}/>
          <Route exact path="/about" component={About}/>
        </main>
      </div>
    </div>
  </div>
)

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  drawerOpen: state.app.drawerOpen,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  drawerToggle: () => actions.drawerToggle()
}, dispatch)

export default compose(
  withRouter,
  withStyles(styles, {withTheme: true}),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer)
