import React from 'react'

export default function TrelloButton({ children, onClick }) {
  return (
    <button variant="contained" onMouseDown={onClick}>
      {children}
    </button>
  )
}
