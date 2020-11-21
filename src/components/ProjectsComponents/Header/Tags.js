import * as React from 'react'
import {
  StyledTagButton,
  StyledTagButtonInput,
  StyledTagWrapper
} from './styles/HeaderStyles'

const TagButton = props => (
  <StyledTagButton
    tabIndex={props.index}
    onKeyDown={e => {
      if (e.key === 'Backspace') props.onPressDeleteTag()
    }}
  >
    <span>{props.title}</span>
  </StyledTagButton>
)

const AddTagButton = props => (
  <StyledTagButtonInput
    ref={props.inputRefTags}
    placeholder={'add tag'}
    onChange={props.handleInput}
    value={props.inputvalue}
    onKeyPress={e => {
      if (e.key === 'Enter' || e.key === ',') props.onPressValidNewTag()
    }}
    onBlur={props.onPressValidNewTag}
  />
)

const Tags = props => {
  const [inputvalue, setinputvalue] = React.useState('')
  const inputRefTags = React.useRef(null)

  React.useEffect(() => {
    if (inputRefTags && inputRefTags.current) inputRefTags.current.focus()
  }, [props.currentProject.tags.length === 0])

  const handleInput = e => {
    e.target.value === ',' || setinputvalue(e.target.value)
  }

  const onPressValidNewTag = () => {
    const tags = props.currentProject.tags
    const valueCheckRegex = /(?=.*[a-zA-Z1-9])/
    if (
      valueCheckRegex.test(inputvalue) &&
      !tags.find(value => value === inputvalue)
    ) {
      tags.push(inputvalue)
      props.projectsActions.updateProject(props.currentProject, tags, 'tags')
    }
    setinputvalue('')
    if (tags.length === 0) {
      props.handleNoTags()
    }
  }

  const onPressDeleteTag = tag => {
    const tags = props.currentProject.tags
    var newTags = tags.filter(value => value !== tag)
    props.projectsActions.updateProject(props.currentProject, newTags, 'tags')
  }

  const allTags = () =>
    props.currentProject.tags.map((tag, i) => (
      <TagButton
        onPressDeleteTag={() => {
          onPressDeleteTag(tag)
        }}
        index={i}
        key={i}
        title={tag}
      />
    ))

  return (
    props.addTags && (
      <StyledTagWrapper>
        {allTags()}
        <AddTagButton
          inputRefTags={inputRefTags}
          inputvalue={inputvalue}
          handleInput={handleInput}
          onPressValidNewTag={onPressValidNewTag}
          handleNoTags={props.handleNoTags}
        />
      </StyledTagWrapper>
    )
  )
}

export default Tags
