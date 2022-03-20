const Course = (props) => {
    const result = props.course.parts.reduce((total, currentValue) => total = total + currentValue.exercises,0)
    console.log(result)
    return (
      <div>
        <h1>{props.course.name}</h1>
        <>{props.course.parts.map(indPart => 
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
