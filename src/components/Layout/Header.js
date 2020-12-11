import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { styles, StyledToolbar } from './styles/layoutStyles'
import { makeStyles } from '@material-ui/core/styles'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const drawerWidth = 240

const useStyles = makeStyles(styles)

function Header() {
  const firebase = useFirebase()
  const { displayName, uid } = useSelector(state => state.firebase.auth)
  useFirestoreConnect({
    collection: `users/${uid}/projects`,
    storeAs: 'projects'
  })

  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleDelog = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Sign-out successful')
      })
      .catch(function(error) {
        console.log(`An error happened: ${error.message}`)
      })
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>Hello {displayName}</MenuItem>
            <MenuItem onClick={handleDelog}>DELOG</MenuItem>
          </Menu>
        </div>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
