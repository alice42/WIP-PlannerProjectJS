import * as React from 'react'
import Input from './Header/Input'
import Title from './Header/Title'
import { HeaderContainer } from './styles/ProjectStyles'

const ProjectHeader = props => {
  const [options, setOptions] = React.useState(false)
  const [modal, setOpenModal] = React.useState(false)

  React.useEffect(() => {
    setOptions(false)
  }, [props.currentProject])

  // OPTIONS & MODAL (CALENDAR)
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleOptions = () => {
    setOptions(!options)
  }

  return (
    <HeaderContainer>
      <Title
        {...props}
        inputRef={props.inputRefTitle}
        currentProject={props.currentProject}
        options={options}
        handleOptions={handleOptions}
        modal={modal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Input
        {...props}
        typeValue={'notes'}
        placeholderValue={'Notes'}
        inputRef={props.inputRefNotes}
      />
    </HeaderContainer>
  )
}

export default ProjectHeader
