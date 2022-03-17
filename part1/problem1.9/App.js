import { useState } from 'react'
/* add good+bad+neutral = get all 
get average (((good)*(1)+(bad)*(-1)+(neutral)*100) / all)
get positive (good*100)/all*/
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {(good * 1 + neutral * 0 - bad * 1) / all }</p>
        <p>positive {(good * 100) / all}%</p>
      </div>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good + 1)}>good</button>
      <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick = {() => setBad(bad + 1)}>bad</button>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}
export default App
