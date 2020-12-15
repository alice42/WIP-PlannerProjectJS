import * as React from 'react'
import { StyledTagButton, StyledTagButtonInput } from './styles/tagsStyles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { defaultTagsList } from './utils'
import { useTheme } from '@material-ui/core'
export const TagButton = ({ index, title, onPressDeleteTag }) => {
  const theme = useTheme()
  return (
    <StyledTagButton
      theme={theme}
      tabIndex={index}
      onClick={e => e.currentTarget.focus()}
      onKeyDown={e => {
        if (e.key === 'Backspace') onPressDeleteTag()
      }}
    >
      <span>{title}</span>
    </StyledTagButton>
  )
}
export const AddTagButton = ({
  project,
  value,
  setValue,
  inputValue,
  setInputValue,
  checkTags
}) => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setOpen(false)
  }, [value])
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
          option => !project.tags.includes(option)
        )
        return filtered
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setOpen(true)
        setInputValue(newInputValue)
      }}
      renderInput={params => {
        React.useEffect(() => {
          if (params.inputProps.ref && params.inputProps.ref.current) {
            setOpen(false)
            params.inputProps.ref.current.focus()
          }
        }, [project.tags.length === 0])
        return (
          <div ref={params.InputProps.ref}>
            <StyledTagButtonInput
              autoFocus
              {...params.inputProps}
              placeholder={'add tag'}
              onBlur={() => {
                setOpen(false)
                checkTags()
              }}
            />
          </div>
        )
      }}
    />
  )
}
