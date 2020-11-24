import { Icon } from '@material-ui/core'
import React from 'react'
import { defaultTagsList } from './utils'

const TagsList = props => {
  return defaultTagsList.map((tag, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
      <Icon style={{ fontSize: '17px' }}>local_offer</Icon>
      {tag}
    </div>
  ))
}

export default TagsList
