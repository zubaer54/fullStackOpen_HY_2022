import { useState } from 'react'
/* add good+bad+neutral = get all 
get average (((good)*(1)+(bad)*(-1)+(neutral)*100) / all)
get positive (good*100)/all*/
const Button = (props) => {
  return (
    <>
      <button onClick = {props.handleClick}>{props.text}</button>
    </>
  )
}
const StatisticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <div>{props.val}%</div>
    )
  }
  else {
    return (
      <div>{props.val}</div>
    )
  }
}
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
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td><StatisticLine text = 'good' val = {good} /></td>
            </tr>
            <tr>
              <td>neutral</td>
              <td><StatisticLine text = 'neutral' val = {neutral} /></td>
            </tr>
            <tr>
              <td>bad</td>
              <td><StatisticLine text = 'bad' val = {bad} /></td>
            </tr>
            <tr>
              <td>all</td>
              <td><StatisticLine text = 'all' val = {all} /></td>
            </tr>
            <tr>
              <td>average</td>
              <td><StatisticLine text = 'average' val = {(good * 1 + neutral * 0 - bad * 1) / all } /></td>
            </tr>
            <tr>
              <td>positive</td>
              <td><StatisticLine text = 'positive' val = {(good * 100) / all}/></td>
            </tr>
          </tbody>
        </table>
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
      <Button handleClick = {() => setGood(good + 1)} text = 'good' />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = 'neutral' />
      <Button handleClick = {() => setBad(bad + 1)} text = 'bad' />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}
export default App
