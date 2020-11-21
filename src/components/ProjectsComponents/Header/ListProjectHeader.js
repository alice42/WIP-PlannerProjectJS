import { Divider, ListItem } from '@material-ui/core'
import * as React from 'react'
import Tags from './Tags'
import ListItemDate from './ListItemDate'
import { StyledContainerList } from './styles/HeaderStyles'

const ListProjectHeader = props => (
  <StyledContainerList>
    {(props.currentProject.startDate ||
      props.currentProject.deadLine ||
      props.tags) && <Divider />}
    {props.currentProject.startDate && (
      <ListItemDate
        {...props}
        type={'startDate'}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
    {props.currentProject.deadLine && (
      <ListItemDate
        {...props}
        type={'deadLine'}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
    {props.tags && (
      <>
        <ListItem className={'each tags'}>
          <Tags
            addTags={props.tags}
            handleNoTags={props.handleNoTags}
            {...props}
          />
        </ListItem>
        <Divider />
      </>
    )}
  </StyledContainerList>
)

export default ListProjectHeader
