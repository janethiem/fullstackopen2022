import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ 
      name: 'Arto Hellas' 
    }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name === newName))
    {
      alert(`${newName} is already added to the phonebook`)
    }
    else
    {
      const personObject = {
        name: newName 
      };
      setPersons(persons.concat(personObject));
      setNewName('');
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( person => <div key={person.name}>{person.name}</div> )}
      </ul>
    </div>
  )
}

export default App