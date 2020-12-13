import React from 'react'
import Form from './Form'
import OpenForm from './OpenForm'
import uuid from 'react-uuid'

export default function Create({
  list,
  project,
  handleUpdateProject,
  listID,
  projectsActions
}) {
  const inputCreateRef = React.useRef(null)
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
      const newList = {
        title: value,
        cards: [],
        id: `heading_${uuid()}`
      }
      const lists = [...project.lists, newList]
      handleUpdateProject(project, lists, 'lists')
    }
    closeForm()
  }

  const handleAddCard = value => {
    if (value) {
      setText('')
      projectsActions.addCard(listID, value, project)
    }
    closeForm()
  }

  return formOpen ? (
    <Form
      list={listID === 'list-0' ? null : list}
      text={text}
      inputRef={inputCreateRef}
      handleInputChange={handleInputChange}
      closeForm={closeForm}
      typeValue={list ? 'heading' : 'todo'}
    />
  ) : (
    (!listID || listID === 'list-0') && (
      <OpenForm list={list} onClick={openForm}>
        {list ? 'Add Heading' : 'Add To-do'}
      </OpenForm>
    )
  )
}
