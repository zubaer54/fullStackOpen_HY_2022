import { useState } from 'react'

const Search = (props) => {
  const ached = (e) => {
    console.log(e.target.value)
    const keyw = e.target.value
    if (keyw !== '') {
      const fin = props.persons.filter(s => s.name.toLowerCase().startsWith(keyw.toLowerCase()))
      props.setFoPersons(fin)
    }
    else {
      props.setFoPersons(props.persons)
    }
  }
  return (
    <form>
      <div>
      filter shown with: <input
      onChange = {ached} />
    </div>
    </form>
  )
}
const PersonForm = (props) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleName = (e) => {
    setNewName(e.target.value)
  }
  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }
  const addP = (e) => {
    e.preventDefault()
    const newP = {
      name: newName,
      number: newNumber
    }
    console.log(newP)
    if (props.persons.some(o => o.name === newP.name)) {
      window.alert(`${newP.name} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else {
      props.setPersons(props.persons.concat(newP))
      props.setFoPersons(props.persons.concat(newP))
      setNewName('')
      setNewNumber('')
    }

  }
  return (
    <form onSubmit = {addP}>
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
  )
}

const Persons = (props) => {
  return (
    <div>{props.foPersons.map(p => 
      <div key = {p.name}>{p.name} {p.number}</div>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [foPersons, setFoPersons] = useState(persons)
  console.log(foPersons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Search persons = {persons} setFoPersons = {setFoPersons}/>
      <h3>Add a new</h3>
      <PersonForm persons = {persons} setPersons = {setPersons} setFoPersons = {setFoPersons} />
      <h3>Numbers</h3>
      <Persons foPersons = {foPersons} />
    </div>
  )
}

export default App
