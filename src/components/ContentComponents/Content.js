import * as React from 'react'

const Content = props => {
  const inputRef = React.useRef(null)
  const [options, setOptions] = React.useState(false)
  const [currentProject, setcurrentProject] = React.useState(null)
  const [formState, setFormState] = React.useState('')

  React.useEffect(() => {
    const existingProject = props.projects.all.find(
      project => project.id === props.match.params.id
    )
    props.match.params.id && !existingProject
      ? props.history.push('/projects/')
      : setcurrentProject(existingProject)
  })

  const openOptions = () => {
    setOptions(!options)
  }

  const handleRemoveProject = project => {
    props.projectsActions.removeProject(project)
    setOptions(false)
  }

  const handleInputChange = event => {
    setFormState(event.target.value)
  }

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      const updatedProject = {
        id: currentProject.id,
        text: formState || currentProject.text,
        isCompleted: false,
        defaultText: false
      }
      props.projectsActions.updateProject(updatedProject)
      setFormState('')
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <>
      {(currentProject && (
        <>
          <div>
            <div>
              {(currentProject.defaultText && (
                <input
                  onBlur={() => {
                    props.projectsActions.saveChange(currentProject)
                  }}
                  id={currentProject.id}
                  autoFocus
                  ref={inputRef}
                  type="text"
                  placeholder={currentProject.text}
                  onChange={event => handleInputChange(event)}
                  onKeyPress={event => handleInputEnter(event)}
                />
              )) ||
                currentProject.text}
            </div>
          </div>
          <div>{currentProject.id}</div>
          <div onClick={openOptions}>options</div>
          {options && (
            <div>
              <div onClick={() => handleRemoveProject(currentProject)}>
                delete
              </div>
              <div>rename</div>
              <div>add Date</div>
              <div>Complete</div>
            </div>
          )}
        </>
      )) || <div>default</div>}
    </>
  )
}

export default Content
