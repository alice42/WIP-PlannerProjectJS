import * as React from 'react'
import { StyledTagButton, StyledTagButtonInput } from './styles/tagsStyles'

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

export const AddTagButton = props => (
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
