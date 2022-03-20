const Course = (props) => {
    console.log(props)
    const result = props.parts.reduce((total, currentValue) => total = total + currentValue.exercises,0)
    console.log(result)
    return (
      <div>
        <h2>{props.name}</h2>
        <>{props.parts.map(indPart => 
        <CourseC key = {indPart.id} name = {indPart.name} exercises = {indPart.exercises} />
        )}</>
        <p style={{fontWeight: "bold"}}>total of {result} exercises</p>
      </div>
    )
}
const CourseC = (props) => {
    console.log(props)
    return (
        <p>{props.name} {props.exercises}</p>
    )
}
export default Course
