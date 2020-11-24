import * as React from 'react'
import InlineGrownInput from '../InlineGrownInput'
import { StyledNotesContainer } from './styles/projectStyles'

const ProjectNotes = props => {
  const inputRefNotes = React.useRef(null)

  React.useEffect(() => {
    if (inputRefNotes && inputRefNotes.current)
      inputRefNotes.current.textContent = props.currentProject.notes || ''
  }, [props.currentProject])

  return (
    <StyledNotesContainer>
      <InlineGrownInput
        {...props}
        inputRef={inputRefNotes}
        value={props.currentProject.notes}
        typeValue={'notes'}
        placeholder={'Notes'}
        handleTypeEditing={props.handleTypeEditing}
      />
    </StyledNotesContainer>
  )
}

export default ProjectNotes
