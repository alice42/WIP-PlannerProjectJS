import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function LinearProgressWithLabel({ value }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
})

export default function LinearWithValueLabel({ todo }) {
  const classes = useStyles()

  const value =
    todo.checklist && todo.checklist.filter(item => item.isCompleted).length
  const MIN = 0
  const MAX = todo.checklist && todo.checklist.length
  const normalise = value => ((value - MIN) * 100) / (MAX - MIN)
  if (!todo.checklist) return null
  return (
    todo.checklist &&
    MAX !== 0 && (
      <div className={classes.root}>
        <LinearProgressWithLabel
          variant="determinate"
          value={normalise(value)}
        />
      </div>
    )
  )
}
