import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
        setLoading(false)
      })
  }, [])

  console.log('render', notes.length, 'notes')
  console.log(notes)

  const handleChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)

    return 
  }
  const addNote = (e) => {
    e.preventDefault()
    const noteObj = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5
    }
    axios
      .post('http://localhost:3001/notes', noteObj)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
        console.log(response)
      })
  }
  
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    axios
      .put(url, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
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
