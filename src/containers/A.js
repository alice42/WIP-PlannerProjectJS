import * as React from 'react'
import Calendar from '../components/Calendar/Calendar'
const A = props => {
  return (
    <div>
      <Calendar
        {...props}
        dateType={'global'}
        handleUpdate={() => console.log('A')}
        toUpdate={'a'}
        handleClose={() => console.log('A')}
      />
    </div>
  )
}

export default A
