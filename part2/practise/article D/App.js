import { useState, useEffect } from 'react'
import axios from 'axios'

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
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  else {
    const listItems = notes.map((a) => <li>{a.content}</li>)
    return (
    <div>
      <h3>Notes </h3>
      <ul>{listItems}</ul>
    </div>
    )
  }
}
export default App
