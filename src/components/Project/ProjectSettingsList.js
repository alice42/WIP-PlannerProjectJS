import { Divider, ListItem } from '@material-ui/core'
import * as React from 'react'
import Tags from '../Tags/Tags'
import { StyledSettingsList } from '../styles/componentsStyles'
import SettingsListItemDate from '../SettingsListItemDate'

const ProjectSettingsList = ({
  project,
  openProjectTags,
  handleUpdateProject,
  handleCloseTags
}) => (
  <StyledSettingsList>
    {(project.when || project.deadline || openProjectTags) && <Divider />}
    {project.when && (
      <SettingsListItemDate
        type={'when'}
        project={project}
        handleUpdateProject={handleUpdateProject}
      />
    )}
    {project.deadline && (
      <SettingsListItemDate
        type={'deadline'}
        project={project}
        handleUpdateProject={handleUpdateProject}
      />
    )}
    {openProjectTags && (
      <ListItem className={'each tags'}>
        <Tags
          withButton
          open={openProjectTags}
          project={project}
          handleUpdate={handleUpdateProject}
          handleCloseTags={handleCloseTags}
        />
      </ListItem>
    )}
    {openProjectTags && <Divider />}
  </StyledSettingsList>
)

export default ProjectSettingsList
