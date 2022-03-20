const Course = (props) => {
    const co = props.course.parts
    console.log(co[0])
    return (
      <div>
        <h1>{props.course.name}</h1>
        <>{co.map(indPart => 
        <CourseC key = {indPart.id} name = {indPart.name} exercises = {indPart.exercises} />
        )}</>
      </div>
    )
    
}
const CourseC = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}
export default Course
