import * as React from 'react'
import Collapse from '@material-ui/core/Collapse'
import Icon from '@material-ui/core/Icon'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputBase from '@material-ui/core/InputBase'
import { useStyledExpandedInput } from './styles/componentsStyles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { defaultTagsList } from './Tags/utils'
import Calendar from './Calendar/Calendar'
// import { div } from './styles/componentsStyles'
import { Popper } from '@material-ui/core'
import { AddTagButton } from './Tags/TagsButtons'

const Test = React.forwardRef(function ListboxComponent(props, ref) {
  return (
    <div ref={ref}>
      {(props.bodyType === 'when' || props.bodyType === 'deadline') && (
        <Calendar
          {...props}
          dateType={props.bodyType}
          handleUpdate={props.handleUpdate}
          toUpdate={props.todo}
          handleClose={props.handleClose}
        />
      )}
      {props.bodyType === 'tag' && <ul role={'listbox'}>{props.children}</ul>}
    </div>
  )
})
const TestA = React.forwardRef(function PopperComponent(props, ref) {
  return (
    <Popper
      ref={ref}
      open={props.open}
      anchorEl={props.anchorEl}
      placement={'bottom-start'}
    >
      {props.children}
    </Popper>
  )
})
const TestB = React.forwardRef(function PaperComponent(props, ref) {
  return <div ref={ref}>{props.children}</div>
})

export default function CustomInputAutocomplete(props) {
  const classes = useStyledExpandedInput()
  const [open, setOpen] = React.useState(true)

  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState(null)

  React.useEffect(() => {
    if (value === inputValue) onPressValidNewTag()
  }, [value])

  const onPressValidNewTag = () => {
    const tags = [...props.todo.tags]
    if (value && !tags.find(tag => tag === value)) {
      tags.push(value)
      props.handleUpdate(props.todo, tags, 'tags')
    }
    setValue(null)
  }
  const options = [
    ...defaultTagsList,
    ...props.project.tags.filter(item => defaultTagsList.indexOf(item) < 0)
  ]

  React.useEffect(() => {
    if (!open && props.expanded[props.id]) {
      setOpen(true)
    }
    if (!open && !props.expanded[props.id]) {
      setOpen(false)
    }
  }, [props.expanded[props.id]])

  return (
    <div className={classes.root}>
      <FormControlLabel
        className={classes.label}
        control={
          <Icon
            id={props.id}
            onClick={e => props.handleClick(e.currentTarget.id, 'bottom', e)}
          >
            {props.icon}
          </Icon>
        }
      />
      <Collapse
        orientation="horizontal"
        in={props.expanded[props.id]}
        timeout="auto"
        unmountOnExit
      >
        <Autocomplete
          id="custom-input-demo"
          options={options}
          open={open}
          freeSolo
          autoComplete
          autoSelect
          clearOnBlur
          blurOnSelect
          value={value}
          filterOptions={options => {
            const filtered = options.filter(
              option => !props.todo.tags.includes(option)
            )
            return filtered.length === 0 ? ['NO OPTIONS'] : filtered
          }}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue)
          }}
          getOptionLabel={option => {
            if (typeof option === 'string') {
              return option
            }
            if (option.inputValue) {
              return option.inputValue
            }
            return option
          }}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          renderInput={params => (
            <InputBase
              autoFocus
              ref={params.InputProps.ref}
              type="text"
              inputProps={params.inputProps}
              className={classes.inputWrapper}
              placeholder={props.option}
            />
          )}
          ListboxComponent={Test}
          PopperComponent={TestA}
          PaperComponent={TestB}
          ListboxProps={{ ...props }}
        />
      </Collapse>
    </div>
  )
}
