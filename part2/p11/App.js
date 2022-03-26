import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  console.log('render', persons.length, 'persons')
  useEffect(hook, [])
  console.log(persons)
  return (
    <div>
      <h3>Numbers</h3>
      <div>{persons.map(p =>
        <div key = {p.id}>{p.name} {p.number}</div>)}
      </div>
    </div>
  )
}
export default App
