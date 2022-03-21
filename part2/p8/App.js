import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
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
      {persons.map(person => 
        <div key = {person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
