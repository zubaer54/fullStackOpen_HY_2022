import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
        setLoading(false)
      })
  }, [])

  console.log('render', notes.length, 'notes')
  console.log(notes)

  const handleChange = (e) => {
    console.log(e.target.value)
    return (
      setNewNote(e.target.value)
    )
  }
  const addNote = (e) => {
    e.preventDefault()
    const noteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    noteService
      .create(noteObj)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }
  
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note ${note.content} is hardcoded`
        )
      })
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  else {
    return (
    <div>
      <h1>Notes </h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
        {notes.map(note => 
          <Note
            key={note.id}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form>
        Add new notes: 
        <input value = {newNote} onChange = {handleChange} />
        <button onClick = {addNote}>Add</button>
      </form>
    </div>
    )
  }
}
export default App
