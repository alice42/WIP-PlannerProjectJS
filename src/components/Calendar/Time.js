import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import TimePicker from '@material-ui/lab/TimePicker'

export default function BasicTimePicker() {
  const [value, setValue] = React.useState(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        label="time"
        value={value}
        onChange={newValue => {
          setValue(newValue)
        }}
        renderInput={params => (
          <TextField {...params} margin="normal" variant="standard" />
        )}
      />
    </LocalizationProvider>
  )
}
