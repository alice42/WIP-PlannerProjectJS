import * as React from 'react'
import InlineGrownInput from '../InlineGrownInput'
import { StyledTodosNotesWrapper } from './styles/todosStyles'

const TodosNotes = ({ project, todo, handleUpdateTodo }) => {
  const inputRefTodosNotes = React.useRef(null)

  React.useEffect(() => {
    if (inputRefTodosNotes && inputRefTodosNotes.current)
      inputRefTodosNotes.current.textContent = todo.notes || ''
  }, [project])

  return (
    <StyledTodosNotesWrapper>
      <InlineGrownInput
        project={todo}
        inputRef={inputRefTodosNotes}
        value={todo.notes}
        typeValue={'notes'}
        placeholder={'Notes'}
        handleUpdateProject={handleUpdateTodo}
      />
    </StyledTodosNotesWrapper>
  )
}

export default TodosNotes
