import Header from './Header'
import Part from './Part'
import Total from './Total'


const Course = ({ name, parts }) => {
    const sumExercises = 
        parts.reduce((prev, curr) => prev + curr.exercises, 0);

    return (
    <>
        <Header course={name}></Header>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}
        <Total sum={sumExercises}></Total>
    </>
)}


export default Course