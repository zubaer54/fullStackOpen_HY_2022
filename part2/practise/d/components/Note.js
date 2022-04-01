import React from 'react'

const Note = ({ note , toggleImportance}) => {
  console.log('Note was called :)')
  const label = note.important
    ? ' make not important' : ' make important'
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note
