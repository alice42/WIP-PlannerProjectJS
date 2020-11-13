import * as React from 'react'
import Input from './Input'
import Options from './Options'
import { TitleContainer } from './styles/HeaderStyles'

const Title = props => {
  return (
    <TitleContainer>
      <Input
        {...props}
        typeValue={'title'}
        placeholderValue={'New Project'}
        inputRef={props.inputRefTitle}
      />
      {props.currentProject.isCompleted && (
        <span className="todo-item-checked">✔</span>
      )}
      {props.currentProject.startDate && (
        <span>startDate: {props.currentProject.startDate}</span>
      )}
      <Options
        {...props}
        options={props.options}
        handleOptions={props.handleOptions}
        modal={props.modal}
        handleOpenModal={props.handleOpenModal}
        handleCloseModal={props.handleCloseModal}
      />
    </TitleContainer>
  )
}

export default Title
