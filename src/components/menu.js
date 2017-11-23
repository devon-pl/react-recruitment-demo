import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import InfoIcon from 'material-ui-icons/Info'
import SearchIcon from 'material-ui-icons/Search'
import Link from 'react-router-dom/Link'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
})

function MenuList (props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemIcon>
            <SearchIcon/>
          </ListItemIcon>
          <ListItemText primary="Search"/>
        </ListItem>
        <ListItem button component={Link} to='/about'>
          <ListItemIcon>
            <InfoIcon/>
          </ListItemIcon>
          <ListItemText primary="Info"/>
        </ListItem>
      </List>
    </div>
  )
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuList)
