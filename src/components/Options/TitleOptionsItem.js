import React from 'react'
import { Icon, Divider } from '@material-ui/core'

const TitleOptionsItem = props => {
  return (
    <>
      <li>
        <Icon className={'icon-list-title-options'}>{props.option.icon}</Icon>
        <span
          className={'label-list-title-options'}
          onClick={props.option.action}
        >
          {props.option.title}
        </span>
      </li>
      {props.index === 3 && <Divider style={{ margin: '3px' }} />}
    </>
  )
}

export default TitleOptionsItem
