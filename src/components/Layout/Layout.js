import * as React from 'react'
import { styles } from './styles/layoutStyles'
import { makeStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Header from './Header'
import Sidebar from './SideBar'

const useStyles = makeStyles(styles)

const Layout = props => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  if (isWidthUp('sm', props.width) && mobileOpen) setMobileOpen(false)

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        {...props}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default withWidth()(Layout)
