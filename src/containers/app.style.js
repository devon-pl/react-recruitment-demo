const drawerWidth = 200

export const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body: {
      margin: 0
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
  },
  root: {
    width: '100%',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'stretch',
    zIndex: 1,
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  drawerList: {
    width: drawerWidth
  },
  mainContainer: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '900px',
    flexGrow: 1,
    padding: 24,
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
  flex: {
    flex: 1,
  },
  hide: {
    display: 'none',
  },
  paper: {
    padding: 16,
  },
})
