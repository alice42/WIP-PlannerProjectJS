import * as React from 'react'
import ProjectHeader from '../components/ProjectsComponents/ProjectHeader'
import ProjectContent from '../components/ProjectsComponents/ProjectContent'

const Content = props => {
  const [currentProject, setcurrentProject] = React.useState(null)

  React.useEffect(() => {
    const existingProject = props.projects.all.find(
      project => project.id === props.match.params.id
    )
    props.match.params.id && !existingProject
      ? props.history.push('/projects/')
      : setcurrentProject(existingProject)
  })
  // const inputRefTitle = React.useRef(null)
  // const inputRefNotes = React.useRef(null)

  // React.useEffect(() => {
  //   if (inputRefNotes && inputRefNotes.current)
  //     inputRefNotes.current.value = currentProject.notes || ''
  //   if (inputRefTitle && inputRefTitle.current) {
  //     inputRefTitle.current.value = currentProject.title || ''
  //     if (!currentProject.title) inputRefTitle.current.focus()
  //   }
  // }, [currentProject])

  return (
    (currentProject && (
      <>
        <ProjectHeader
          {...props}
          all={props.projects.all}
          currentProject={currentProject}
          // inputRefNotes={inputRefNotes}
          // inputRefTitle={inputRefTitle}
        />
        <ProjectContent {...props} currentProject={currentProject} />
      </>
    )) || <div>NO PROJECT SELECTED</div>
  )
}

export default Content
