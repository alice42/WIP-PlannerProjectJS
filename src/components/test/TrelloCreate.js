import React from 'react'
import TrelloForm from './TrelloForm'
import TrelloOpenForm from './TrelloOpenForm'

export default function TrelloCreate(props) {
  const [text, setText] = React.useState('')
  const [formOpen, setformOpen] = React.useState(false)

  const openForm = () => {
    setformOpen(true)
  }

  const closeForm = e => {
    setformOpen(false)
  }

  const handleInputChange = e => {
    setText(e.target.value)
  }

  const handleAddList = () => {
    if (text) {
      setText('')
      props.projectsActions.addList(text, props.currentProject)
    }
    closeForm()
    return
  }

  const handleAddCard = () => {
    if (text) {
      setText('')
      props.projectsActions.addCard(props.listID, text, props.currentProject)
    }
    closeForm()
    return
  }

  return formOpen ? (
    <TrelloForm
      list={props.listID === 'list-0' ? null : props.list}
      text={text}
      onChange={handleInputChange}
      closeForm={closeForm}
      handleAddItem={props.list ? handleAddList : handleAddCard}
    />
  ) : (
    (!props.listID || props.listID === 'list-0') && (
      <TrelloOpenForm list={props.list} onClick={openForm}>
        {props.list ? 'Add Heading' : 'Add To-do'}
      </TrelloOpenForm>
    )
  )
}
