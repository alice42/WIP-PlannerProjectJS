import React from 'react'

const TagsList = props => {
  return props.currentProject.tags.map((tag, index) => (
    <div key={index}>{tag}</div>
  ))
}

export default TagsList
