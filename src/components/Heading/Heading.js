import React, { useState } from 'react'
import Todos from '../Todos/Todos'
import { useSelector } from 'react-redux'
import Create from '../DragNDrop/Create'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { StyledInputWrapperLeft } from '../styles/componentsStyles'
import { StyledHeadingContainer, styles } from './styles/headingStyles'
import InlineGrownInput from '../InlineGrownInput'

import { makeStyles } from '@material-ui/core/styles'
import { Icon } from '@material-ui/core'

const useStyles = makeStyles(styles)

const Heading = props => {
  const classes = useStyles()
  const { uid } = useSelector(state => state.firebase.auth)
  const inputRefHeading = React.useRef(null)
  const [isEditing, setIsEditing] = useState(false)
  const [listTitle, setListTitle] = useState(props.title)

  React.useEffect(() => {
    if (inputRefHeading && inputRefHeading.current) {
      inputRefHeading.current.textContent = listTitle || ''
      if (!listTitle) inputRefHeading.current.focus()
    }
  }, [isEditing])

  const handleTypeEditing = (value, type) => {
    if (type === 'heading') {
      const newLists = props.project.lists.map(list => {
        if (list.id === props.listID) {
          return { ...list, title: value }
        } else return list
      })
      props.handleUpdateProject(props.project, newLists, 'lists')
      setListTitle(value)
    }
    setIsEditing(false)
  }

  const handledeleteList = () => {
    props.projectsActions.deleteList(props.listID, props.project)
  }

  const renderEditInput = () => {
    return (
      <StyledInputWrapperLeft style={{ marginBottom: '8px' }}>
        <InlineGrownInput
          inputRef={inputRefHeading}
          value={listTitle}
          typeValue={'heading'}
          placeholder={'New Heading'}
          handleUpdateProject={handleTypeEditing}
        />
      </StyledInputWrapperLeft>
    )
  }

  return (
    <Draggable
      draggableId={String(props.listID)}
      index={props.index}
      isDragDisabled={props.listID === 'list-0' ? true : false}
    >
      {provided => (
        <StyledHeadingContainer
          className={classes.cardHeading}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseDown={e => e.currentTarget.focus()}
        >
          <Droppable droppableId={String(props.listID)} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {isEditing
                  ? renderEditInput()
                  : props.listID !== 'list-0' && (
                      <h4>
                        <div onClick={() => setIsEditing(true)}>
                          {listTitle}
                        </div>
                        <Icon onClick={handledeleteList}>delete</Icon>
                      </h4>
                    )}

                {props.cards.map((card, index) => (
                  <Todos
                    projects={props.projects}
                    {...props}
                    todo={card}
                    key={card.id}
                    title={card.title}
                    id={card.id}
                    index={index}
                    listID={props.listID}
                    handleUpdateProject={props.handleUpdateProject}
                  />
                ))}
                {provided.placeholder}
                <Create
                  {...props}
                  listID={props.listID}
                  handleUpdateProject={props.handleUpdateProject}
                  project={props.project}
                />
              </div>
            )}
          </Droppable>
        </StyledHeadingContainer>
      )}
    </Draggable>
  )
}

export default Heading
