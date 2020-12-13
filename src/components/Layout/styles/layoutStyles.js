import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'

const drawerWidth = 240

export const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
})

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
