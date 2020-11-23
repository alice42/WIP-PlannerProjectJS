import * as React from 'react'
import InlineGrownInput from '../InlineGrownInput'

const ProjectTitle = props => {
  const inputRefTitle = React.useRef(null)

  React.useEffect(() => {
    if (inputRefTitle && inputRefTitle.current) {
      inputRefTitle.current.textContent = props.currentProject.title || ''
      if (!props.currentProject.title) inputRefTitle.current.focus()
    }
  }, [props.currentProject])

  return (
    <InlineGrownInput
      {...props}
      inputRef={inputRefTitle}
      typeValue={'title'}
      value={props.currentProject.title}
      placeholder={'New Project'}
      handleInputEditing={props.handleInputEditing}
    />
  )
}

export default ProjectTitle
