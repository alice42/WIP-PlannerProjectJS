import * as React from 'react'
import { StyledTagWrapper } from './styles/tagsStyles'
import { TagButton, AddTagButton } from './TagsButtons'

const Tags = props => {
  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState('')

  React.useEffect(() => {
    if (value === inputValue) onPressValidNewTag()
  }, [value])

  const onPressValidNewTag = () => {
    const tags = props.toUpdate.tags
    if (value && !tags.find(tag => tag === value)) {
      tags.push(value)
      props.handleUpdate(props.toUpdate, tags, 'tags')
    }
    setValue(null)
  }

  const checkTags = () => {
    const tags = props.toUpdate.tags
    if (tags.length === 0 && !value && !inputValue) {
      props.handleCloseTags()
    }
  }

  const onPressDeleteTag = tag => {
    const tags = props.toUpdate.tags
    var newTags = tags.filter(value => value !== tag)
    props.handleUpdate(props.toUpdate, newTags, 'tags')
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
    props.open && (
      <StyledTagWrapper>
        {allTags(props.toUpdate.tags)}
        {props.withButton && (
          <AddTagButton
            {...props}
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

// import * as React from 'react'
// import { StyledTagWrapper } from './styles/tagsStyles'
// import { TagButton, AddTagButton } from './TagsButtons'

// const Tags = props => {
//   const [value, setValue] = React.useState(null)
//   const [inputValue, setInputValue] = React.useState('')

//   React.useEffect(() => {
//     if (value === inputValue) onPressValidNewTag()
//   }, [value])

//   const onPressValidNewTag = () => {
//     const tags = props.tags
//     if (value && !tags.find(tag => tag === value)) {
//       tags.push(value)
//       props.projectsActions.updateProject(props.currentProject, tags, 'tags')
//     }
//     setValue(null)
//   }

//   const checkTags = () => {
//     const tags = props.tags
//     if (tags.length === 0 && !value && !inputValue) {
//       props.handleCloseTags()
//     }
//   }
//   const onPressDeleteTag = (tag, test) => {
//     const tags = test ? props.tags : props.todo.tags
//     var newTags = tags.filter(value => value !== tag)
//     test
//       ? props.projectsActions.updateProject(
//           props.currentProject,
//           newTags,
//           'tags'
//         )
//       : props.handleUpdateTodo(props.todo, newTags, 'tags')
//   }

//   const AllTags = ({ tags, test }) =>
//     tags &&
//     tags.map((tag, i) => (
//       <TagButton
//         onPressDeleteTag={() => {
//           onPressDeleteTag(tag, test)
//         }}
//         index={i}
//         key={i}
//         title={tag}
//       />
//     ))

//   return (
//     props.open && (
//       <StyledTagWrapper>
//         <AllTags {...props} />
//         {props.test && (
//           <AddTagButton
//             {...props}
//             value={value}
//             setValue={setValue}
//             inputValue={inputValue}
//             setInputValue={setInputValue}
//             onPressValidNewTag={onPressValidNewTag}
//             checkTags={checkTags}
//           />
//         )}
//       </StyledTagWrapper>
//     )
//   )
// }

// export default Tags
