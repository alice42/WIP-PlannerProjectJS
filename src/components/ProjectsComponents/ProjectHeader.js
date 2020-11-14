import * as React from 'react'
import CustomGrowInput from './CustomGrowInput'
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

  const handleTypeEditing = (value, type) => {
    props.projectsActions.updateProject(props.currentProject, value, type)
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
        handleTypeEditing={handleTypeEditing}
      />
      <div
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'left',
          paddingLeft: '20px'
        }}
      >
        <CustomGrowInput
          {...props}
          value={props.currentProject.notes}
          typeValue={'notes'}
          placeholderValue={'Notes'}
          handleTypeEditing={handleTypeEditing}
        />
      </div>
    </HeaderContainer>
  )
}

export default ProjectHeader
