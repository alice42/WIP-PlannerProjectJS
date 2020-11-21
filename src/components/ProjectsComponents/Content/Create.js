import React from 'react'
import Form from './Form'
import OpenForm from './OpenForm'

export default function Create(props) {
  const [text, setText] = React.useState('')
  const [formOpen, setformOpen] = React.useState(false)

  const openForm = () => {
    setformOpen(true)
  }

  const closeForm = e => {
    setformOpen(false)
  }

  const handleInputChange = (value, type) => {
    setText(value)
    type === 'heading' ? handleAddList(value) : handleAddCard(value)
  }

  const handleAddList = value => {
    if (value) {
      setText('')
      props.projectsActions.addList(value, props.currentProject)
    }
    closeForm()
  }

  const handleAddCard = value => {
    if (value) {
      setText('')
      props.projectsActions.addCard(props.listID, value, props.currentProject)
    }
    closeForm()
  }

  return formOpen ? (
    <Form
      list={props.listID === 'list-0' ? null : props.list}
      text={text}
      inputRef={props.inputRef}
      handleInputChange={handleInputChange}
      closeForm={closeForm}
      typeValue={props.list ? 'heading' : 'todo'}
    />
  ) : (
    (!props.listID || props.listID === 'list-0') && (
      <OpenForm list={props.list} onClick={openForm}>
        {props.list ? 'Add Heading' : 'Add To-do'}
      </OpenForm>
    )
  )
}
