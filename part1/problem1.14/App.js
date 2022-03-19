import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick = {props.handleClick}>{props.text}</button>
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const lenggy = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [anacy, setAnacy] = useState(Array(anecdotes.length).fill(0))
  console.log('selected state', selected)
  console.log('random value', lenggy)
  console.log('current voting state', anacy)
  const voted = () => {
    console.log('random value', lenggy)
    const copy = [...anacy]
    copy[lenggy] += 1
    console.log(copy)
    return (
      setAnacy(copy)
    )
  }
  const maxi = Math.max(...anacy);
  const indexi = anacy.indexOf(maxi)
  console.log('This place selected', Math.max(...anacy))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[lenggy]}<br />has {anacy[lenggy]} votes</p>
      <button onClick={voted}>vote</button>
      <Button handleClick = {() => setSelected(selected + 1)} text = 'next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexi]} <br />has {anacy[indexi]} votes</p>
    </div>
  )
}

export default App
