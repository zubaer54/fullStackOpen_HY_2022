import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ 
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // the value of the search field 
  const [name, setName] = useState('')
  // the search result
  const [foundPersons, setFoundPersons] = useState(persons)
  
  const filter = (event) => {
    const keyword = event.target.value
    if (keyword !== '') {
      const results = persons.filter((contact) => {
        return (
          contact.name.toLowerCase().startsWith(keyword.toLowerCase())
        )
      })
      setFoundPersons(results)
    }
    else {
      setFoundPersons(persons)
    }
    setName(keyword);
  }
  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target)
    const newPersonObj = {
      name: newName,
      number: newNumber
    }
    if (persons.some (person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else {
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input 
            type = "search"
            value = {name} 
            onChange = {filter}
            placeholder = "Filter" />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input 
            value = {newName}
            onChange = {handleName} />
        </div>
        <div>
          number: <input
            value = {newNumber}
            onChange = {handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {foundPersons.map(person => 
        <div key = {person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
