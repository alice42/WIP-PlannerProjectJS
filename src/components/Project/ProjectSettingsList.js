import { Divider, ListItem } from '@material-ui/core'
import * as React from 'react'
import Tags from '../Tags/Tags'
import { StyledProjectSettingsList } from '../styles/componentsStyles'
import SettingsListItemDate from '../SettingsListItemDate'

const ProjectSettingsList = props => (
  <StyledProjectSettingsList>
    {(props.currentProject.when ||
      props.currentProject.deadline ||
      props.tags) && <Divider />}
    {props.currentProject.when && (
      <SettingsListItemDate
        {...props}
        type={'when'}
        typeSettings={props.currentProject}
        handleRemoveEvent={props.handleRemoveEvent}
      />
    )}
    {props.currentProject.deadline && (
      <SettingsListItemDate
        {...props}
        type={'deadline'}
        typeSettings={props.currentProject}
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
  </StyledProjectSettingsList>
)

export default ProjectSettingsList
