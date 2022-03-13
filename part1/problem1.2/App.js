const Header = (cN) => (
  <>
  <h1>{cN.nam}</h1>
  </>
)

const Part = (pN1) => (
  <>
  <p>{pN1.nam} {pN1.exer}</p>
  </>
)

const Content = (pN) => {
  return (
    <>
    <Part nam = {pN.nam} exer = {pN.exer} />
    </>
  )
}
const Total = (tot) => (
  <>
  <p>Number of exercises {tot.ex1 + tot.ex2 + tot.ex3}</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header nam = {course}/>
      <Content nam = {part1} exer = {exercises1}/>
      <Content nam = {part2} exer = {exercises2}/>
      <Content nam = {part3} exer = {exercises3}/>
      <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3}/>
    </div>
  )
}
export default App
