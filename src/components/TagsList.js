import React from 'react'

const TagsList = props => {
  return props.currentProject.tags.map(tag => <div>{tag}</div>)
}

export default TagsList
