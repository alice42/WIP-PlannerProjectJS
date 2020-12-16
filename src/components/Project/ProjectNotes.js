import * as React from 'react'
import InlineGrownInput from '../InlineGrownInput'
import { StyledNotesContainer } from './styles/projectStyles'

const ProjectNotes = ({ project, handleUpdateProject }) => {
  const inputRefNotes = React.useRef(null)

  React.useEffect(() => {
    if (inputRefNotes && inputRefNotes.current)
      inputRefNotes.current.textContent = project.notes || ''
  }, [project])

  return (
    <StyledNotesContainer>
      <InlineGrownInput
        project={project}
        inputRef={inputRefNotes}
        value={project.notes}
        typeValue={'notes'}
        placeholder={'Notes'}
        handleUpdateProject={handleUpdateProject}
      />
    </StyledNotesContainer>
  )
}

export default ProjectNotes
