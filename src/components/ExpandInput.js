import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Collapse from '@material-ui/core/Collapse'
import Icon from '@material-ui/core/Icon'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputBase from '@material-ui/core/InputBase'
import { defaultTagsList } from './Tags/utils'
import { CalendarMenu, OptionsMenu } from './Popper'
import { Popper } from '@material-ui/core'
import { dateRange, todayStr } from './utilsDates'
import { useStyledExpandedInput } from './styles/componentsStyles'

const ListboxComponent = React.forwardRef(function ListboxComponent(
  props,
  ref
) {
  return (
    <div ref={ref}>
      {props.dates.length === props.children.length ? (
        <CalendarMenu
          bodyType={props.option.id}
          handleUpdate={props.handleUpdate}
          toUpdate={props.todo}
          handleClose={props.handleClose}
        />
      ) : (
        <OptionsMenu listOptions role={'listbox'} options={props.children} />
      )}
    </div>
  )
})

const PopperComponent = React.forwardRef(function PopperComponent(props, ref) {
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
const PaperComponent = React.forwardRef(function PaperComponent(props, ref) {
  return <div ref={ref}>{props.children}</div>
})

export default function Auto({
  handleSetValue,
  handleUpdateTodo,
  handleOpen,
  handleClose,
  option,
  open,
  todo,
  project
}) {
  const classes = useStyledExpandedInput()
  if (option.id === 'tag') {
    const tagsOptions = [
      ...defaultTagsList,
      ...project.tags.filter(item => defaultTagsList.indexOf(item) < 0)
    ]

    const fixedOptions = [...todo.tags]
    const value = [...fixedOptions]

    return (
      <div className={classes.root}>
        <FormControlLabel
          className={classes.label}
          control={
            <Icon id={option.id} onClick={e => handleOpen(e.currentTarget.id)}>
              {option.icon}
            </Icon>
          }
        />
        <Collapse
          orientation="horizontal"
          in={open[option.id]}
          timeout="auto"
          unmountOnExit
        >
          <Autocomplete
            id={`${todo.id}_${option.id}`}
            multiple
            freeSolo
            autoComplete
            autoSelect
            clearOnBlur
            blurOnSelect
            filterSelectedOptions
            value={value}
            open={true}
            getOptionSelected={(option, value) => option === value}
            onChange={(_event, value) =>
              handleSetValue(
                [
                  ...fixedOptions,
                  ...value.filter(option => fixedOptions.indexOf(option) === -1)
                ],
                option.id
              )
            }
            options={tagsOptions}
            getOptionLabel={option => option}
            renderInput={params => (
              <InputBase
                autoFocus
                ref={params.InputProps.ref}
                type="text"
                inputProps={params.inputProps}
                className={classes.inputWrapper}
                placeholder={option.title}
              />
            )}
            PopperComponent={PopperComponent}
          />
        </Collapse>
      </div>
    )
  } else if (option.id === 'when' || option.id === 'deadine') {
    var date = new Date()
    date.setDate(date.getDate() + 15)
    const to = date.toISOString().replace(/T.*$/, '')

    const dates = dateRange(todayStr, to)

    return (
      <div className={classes.root}>
        <FormControlLabel
          className={classes.label}
          control={
            <Icon id={option.id} onClick={e => handleOpen(e.currentTarget.id)}>
              {option.icon}
            </Icon>
          }
        />
        <Collapse
          orientation="horizontal"
          in={open[option.id]}
          timeout="auto"
          unmountOnExit
        >
          <Autocomplete
            id={`${todo.id}_${option.id}`}
            multiple
            freeSolo
            autoComplete
            autoSelect
            clearOnBlur
            blurOnSelect
            onChange={(_event, value) => {
              dates.find(date => date.date === value[value.length - 1].date) &&
                handleSetValue(value[value.length - 1].date, option.id)
            }}
            options={dates}
            open
            getOptionLabel={option => option.option}
            renderInput={params => (
              <InputBase
                autoFocus
                ref={params.InputProps.ref}
                type="text"
                className={classes.inputWrapper}
                inputProps={params.inputProps}
                placeholder={option.title}
              />
            )}
            ListboxComponent={ListboxComponent}
            PopperComponent={PopperComponent}
            PaperComponent={PaperComponent}
            ListboxProps={{
              option: option,
              dates: dates,
              todo: todo,
              handleUpdate: handleUpdateTodo,
              handleClose: handleClose
            }}
          />
        </Collapse>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <FormControlLabel
          className={classes.label}
          control={
            <Icon id={option.id} onClick={e => handleOpen(e.currentTarget.id)}>
              {option.icon}
            </Icon>
          }
        />
        <Collapse
          orientation="horizontal"
          in={open[option.id]}
          timeout="auto"
          unmountOnExit
        >
          A
        </Collapse>
      </div>
    )
  }
}
