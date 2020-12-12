import * as React from 'react'
import { StyledTagWrapper } from './styles/tagsStyles'
import { TagButton, AddTagButton } from './TagsButtons'

const Tags = ({ withButton, open, project, handleUpdate, handleCloseTags }) => {
  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState('')

  React.useEffect(() => {
    if (value === inputValue) onPressValidNewTag()
  }, [value])

  const onPressValidNewTag = () => {
    const tags = [...project.tags]
    if (value && !tags.find(tag => tag === value)) {
      tags.push(value)
      handleUpdate(tags, 'tags')
    }
    setValue(null)
  }

  const checkTags = () => {
    const tags = project.tags
    if (tags.length === 0 && !value && !inputValue) {
      handleCloseTags()
    }
  }

  const onPressDeleteTag = tag => {
    const tags = project.tags
    var newTags = tags.filter(value => value !== tag)
    handleUpdate(newTags, 'tags')
  }

  const allTags = tags =>
    tags.map((tag, i) => (
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
    open && (
      <StyledTagWrapper>
        {allTags(project.tags)}
        {withButton && (
          <AddTagButton
            project={project}
            value={value}
            setValue={setValue}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onPressValidNewTag={onPressValidNewTag}
            checkTags={checkTags}
          />
        )}
      </StyledTagWrapper>
    )
  )
}

export default Tags
