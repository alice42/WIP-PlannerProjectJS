import React from 'react'
import Heading from '../Heading/Heading'
import Create from './Create'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

export default function DnDContext({
  project,
  handleUpdateProject,
  projectsActions
}) {
  const listsState = useSelector(state => state.projects.lists)

  React.useEffect(() => {
    projectsActions.cleanLists()
    projectsActions.initLists(project)
  }, [project])

  React.useEffect(() => {
    if (listsState) {
      handleUpdateProject(project, listsState, 'lists')
    } else {
      projectsActions.cleanLists()
      projectsActions.initLists(project)
    }
  }, [listsState])

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result
    if (
      !destination ||
      (type === 'list' && (source.index === 0 || destination.index === 0))
    ) {
      return
    }
    projectsActions.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type,
      project
    )
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" type="list">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {listsState &&
              listsState.map((list, index) => (
                <Heading
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                  project={project}
                  projectsActions={projectsActions}
                  handleUpdateProject={handleUpdateProject}
                />
              ))}
            {provided.placeholder}
            <Create
              list
              project={project}
              handleUpdateProject={handleUpdateProject}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
