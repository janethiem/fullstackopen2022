const Persons = ({ persons, confirmDeletion }) => {

    return (
        persons.map(person => 
            <div key={person.name}>
            {person.name} {person.number} 
            <button onClick={ () => 
                confirmDeletion(
                    person.name,
                    person.id)
            }>
            delete
            </button>
            </div> 
        )
    )
}

export default Persons