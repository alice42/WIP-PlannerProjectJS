import { Divider, ListItem } from '@material-ui/core'
import * as React from 'react'
import Tags from '../Tags/Tags'
import { StyledSettingsList } from '../styles/componentsStyles'
import SettingsListItemDate from '../SettingsListItemDate'

const ProjectSettingsList = props => (
  <StyledSettingsList>
    {(props.currentProject.when ||
      props.currentProject.deadline ||
      props.openProjectTags) && <Divider />}
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
    {props.openProjectTags && (
      <>
        <ListItem className={'each tags'}>
          <Tags
            withButton
            open={props.openProjectTags}
            toUpdate={props.currentProject}
            handleUpdate={props.handleUpdateProject}
            {...props}
          />
        </ListItem>
        <Divider />
      </>
    )}
  </StyledSettingsList>
)

export default ProjectSettingsList
