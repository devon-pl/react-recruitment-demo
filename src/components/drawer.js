import React from 'react'
import PropTypes from 'prop-types'
import Divider from 'material-ui/Divider'
import Menu from './menu'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'

const DrawerComponent = props => (
  <Drawer
    type="temporary"
    anchor="left"
    open={props.open}
    onRequestClose={props.handleToggle}
  >
    <div className={props.classes.drawerList}>
      <div className={props.classes.drawerHeader}>
        <IconButton onClick={props.handleToggle}>
          {props.theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
        </IconButton>
      </div>
      <Divider/>
      <Menu/>
    </div>
  </Drawer>
)

DrawerComponent.propTypes = {
  classes: PropTypes.shape({
    drawerList: PropTypes.string.isRequired,
    drawerHeader: PropTypes.string.isRequired,
  }),
  handleToggle: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
}

export default DrawerComponent
