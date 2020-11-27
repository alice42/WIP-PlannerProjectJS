import * as React from 'react'
import { StyledTagButton, StyledTagButtonInput } from './styles/tagsStyles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { defaultTagsList } from './utils'

export const TagButton = props => (
  <StyledTagButton
    tabIndex={props.index}
    onKeyDown={e => {
      if (e.key === 'Backspace') props.onPressDeleteTag()
    }}
  >
    <span>{props.title}</span>
  </StyledTagButton>
)

export const AddTagButton = props => {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    setOpen(false)
  }, [props.value])
  return (
    <Autocomplete
      id="tag-autocomplete"
      open={open}
      freeSolo
      autoComplete
      autoSelect
      clearOnBlur
      blurOnSelect
      options={defaultTagsList}
      filterOptions={options => {
        const filtered = options.filter(
          option => !props.currentProject.tags.includes(option)
        )
        return filtered
      }}
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue)
      }}
      inputValue={props.inputValue}
      onInputChange={(event, newInputValue) => {
        setOpen(true)
        props.setInputValue(newInputValue)
      }}
      renderInput={params => {
        React.useEffect(() => {
          if (params.inputProps.ref && params.inputProps.ref.current) {
            setOpen(false)
            params.inputProps.ref.current.focus()
          }
        }, [props.currentProject.tags.length === 0])
        return (
          <div ref={params.InputProps.ref}>
            <StyledTagButtonInput
              autoFocus
              {...params.inputProps}
              placeholder={'add tag'}
              onBlur={() => {
                setOpen(false)
                props.checkTags()
              }}
            />
          </div>
        )
      }}
    />
  )
}
