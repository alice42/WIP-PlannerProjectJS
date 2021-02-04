import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Calendar from '../components/Calendar/Calendar'

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
  const [selectedProject, setSelectedProject] = React.useState(null)
  const selectedProjectTodos =
    selectedProject &&
    selectedProject.lists.map((list, index) => list.cards).flat()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8}>
          <Paper className={classes.paper}>
            {props.firestore.data && props.firestore.data.projects && (
              <Calendar
                {...props}
                dateType={'global'}
                handleUpdate={() => console.log('A')}
                toUpdate={
                  selectedProjectTodos
                    ? selectedProjectTodos
                    : Object.values(props.firestore.data.projects)
                }
                handleClose={() => console.log('A')}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>
            {!selectedProject ? (
              <div>
                <div>All projects</div>
                <div>
                  <small>Select project to see to-dos</small>
                </div>
                <div>
                  {props.firestore.data.projects &&
                    Object.values(props.firestore.data.projects).map(
                      (project, index) => (
                        <div
                          onClick={() => setSelectedProject(project)}
                          key={index}
                        >
                          {project.title}
                        </div>
                      )
                    )}
                </div>
              </div>
            ) : (
              <div>
                <div>Project: {selectedProject.title}</div>
                {selectedProject.lists.map((list, index) =>
                  list.cards.map((todo, index) => (
                    <div key={index}>{todo.title}</div>
                  ))
                )}
                <div onClick={() => setSelectedProject(null)}>Back</div>
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default A
