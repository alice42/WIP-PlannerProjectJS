import * as React from 'react'
import InlineGrownInput from '../InlineGrownInput'

const ProjectTitle = ({ handleUpdateProject, project }) => {
  const { title } = project
  const inputRefTitle = React.useRef(null)

  React.useEffect(() => {
    if (inputRefTitle && inputRefTitle.current) {
      inputRefTitle.current.textContent = title || ''
      if (!title) inputRefTitle.current.focus()
    }
  }, [project])

  return (
    <InlineGrownInput
      style={{ fontSize: '17px' }}
      inputRef={inputRefTitle}
      typeValue={'title'}
      value={title}
      placeholder={'New Project'}
      handleUpdateProject={handleUpdateProject}
    />
  )
}

export default ProjectTitle
