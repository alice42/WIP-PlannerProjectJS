import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Calendar from '../components/Calendar/Calendar'
import Time from '../components/Calendar/Time'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const A = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Time />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8}>
          <Paper className={classes.paper}>
            {props.firestore.data && props.firestore.data.projects && (
              <Calendar
                {...props}
                dateType={'global'}
                handleUpdate={() => console.log('A')}
                toUpdate={Object.values(props.firestore.data.projects)}
                handleClose={() => console.log('A')}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>All Projects</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default A
