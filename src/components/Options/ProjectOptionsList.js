import ListItems from './ProjectOptionsItem'
import React from 'react'

const ProjectOptionsList = props => {
  return (
    <ul>
      {props.options.map((option, index) => (
        <ListItems
          key={`option_${index}`}
          option={option}
          index={index}
          handleClose={props.handleClose}
        />
      ))}
    </ul>
  )
}

export default ProjectOptionsList
