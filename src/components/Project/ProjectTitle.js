import * as React from 'react'
import InlineGrownInput from '../InlineGrownInput'

const ProjectTitle = ({ handleInputEditing, project }) => {
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
      inputRef={inputRefTitle}
      typeValue={'title'}
      value={title}
      placeholder={'New Project'}
      handleInputEditing={handleInputEditing}
    />
  )
}

export default ProjectTitle
