import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilterName, setNewFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (existingPerson)
    {
      if (window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`))
       {
          personService
            .update({ ...existingPerson, number: newNumber})
            .then(returnedPerson => {
              setPersons(persons.map(person => 
                person.id === returnedPerson.id
                  ? returnedPerson
                  : person
              ));
              setNewName('');
              setNewNumber('');
          });
       }
    }
    else
    {
      const personObject = {
        name: newName,
        number: newNumber
      };

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
      });
    }
  }

  const confirmDeletion = (name, id) => {
    if (window.confirm(`Delete ${name} ?`))
    {
      personService
          .remove(id)
          .then((response) => {
            setPersons(persons.filter((person) => person.id !== id));
          });
    }
  }

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleFilterChange = event => setNewFilterName(event.target.value);

  const namesToShow = newFilterName === '' 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilterName));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={newFilterName} handleFilterChange={handleFilterChange} />
      <h2>Add New Entry</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={namesToShow}
        confirmDeletion={confirmDeletion}
      />
    </div>
  )
}

export default App